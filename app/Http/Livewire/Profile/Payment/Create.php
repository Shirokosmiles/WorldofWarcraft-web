<?php

namespace App\Http\Livewire\Profile\Payment;

use App\Models\Payment\History;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Livewire\Component;

class Create extends Component
{
    public $option;

    public $sum;

    public $enable;

    protected array $messages = [
        'sum.required' => 'Введите сумму.',
        'sum.min' => 'Минимальная сумма: :min рублей.'
    ];

    protected function rules()
    {
        return [
            'sum' => [
                'required',
                'numeric',
                'min:'.config('payment.bonus_min_payment')
            ]
        ];
    }

    public function mount()
    {
        $this->enable = config('payment.enable_payment');
    }

    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
    }

    public function createValidate() {
        $validatedData = $this->validate();
    }

    public function create(): \Illuminate\Routing\Redirector|\Illuminate\Http\RedirectResponse|Application|null
    {
        $validatedData = $this->validate();
        switch ($this->option) {
            case '1':
                $order_id = time();
                $merchant_id = config('payment.freekassa.project_id');
                $secret_word = config('payment.freekassa.secret_key');
                $order_amount = $this->sum*config('payment.bonus_payment');
                $currency = 'RUB';
                $sign = md5($merchant_id.':'.$order_amount.':'.$secret_word.':'.$currency.':'.$order_id);

                $this->createHistory('balance', 'FreeKassa', 'Пополнение баланса', $order_id);

                $url = 'https://pay.freekassa.ru/?m='.$merchant_id.'&oa='.$order_amount.'&o='.$order_id.'&s='.$sign.'&currency=RUB&us_login='.Auth::user()->name;
                return redirect($url);
            break;
            case '2':
                $MERCHANT_ID   = config('payment.enot.app_id');
                $SECRET_WORD   = config('payment.enot.secret_key_1');
                $PAYMENT_ID    = time();
                $ORDER_AMOUNT  = $this->sum*config('payment.bonus_payment');

                $sign = md5($MERCHANT_ID.':'.$ORDER_AMOUNT.':'.$SECRET_WORD.':'.$PAYMENT_ID);

                $this->createHistory('balance', 'Enot', 'Пополнение баланса', $PAYMENT_ID);

                $url = 'https://enot.io/pay?m='.$MERCHANT_ID.'&oa='.$ORDER_AMOUNT.'&o='.$PAYMENT_ID.'&s='.$sign.'&cr=RUB';
                return redirect($url);
            break;

            case '3':

                $provider = \PayPal::setProvider();
                $provider->setApiCredentials(config('paypal')); // Pull values from Config
                $token = $provider->getAccessToken();
                $provider->setAccessToken($token);

                $order = $provider->createOrder([
                    'intent'=> 'CAPTURE',
                    'purchase_units'=> [[
                        'reference_id' => 'transaction_test_number',
                        'amount'=> [
                            'currency_code'=> config('paypal.currency'),
                            'value'=> $this->sum
                        ]
                    ]],
                    'application_context' => [
                        'cancel_url' => config('paypal.cancel_url'),
                        'return_url' => config('paypal.return_url')
                    ]
                ]);

                $this->createHistory('balance', 'PayPal', 'Пополнение баланса', $order['id']);

                return redirect($order['links'][1]['href']);
            break;

            case '4':
                $jwt = config('lava.jwt');

                $data = [
                    'wallet_to' => config('lava.wallet'),
                    'sum'      => $this->sum.'.00',
                    'order_id' => time(),
                    'hook_url' => 'https://lava.ru/hook',
                    'success_url' => 'https://lava.ru/success',
                    'fail_url' => 'https://lava.ru/fail',
                    'expire' => config('lava.expire'),
                    'subtract' => config('lava.subtract'),
                ];

                $headers = [
                    "Authorization: ".$jwt,
                ];

                $this->createHistory('balance', 'Lava', 'Пополнение баланса', $data['order_id']);

                $ch = curl_init();
                curl_setopt($ch, CURLOPT_URL, config('lava.invoice'));
                curl_setopt($ch, CURLOPT_POST, true);
                curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
                curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
                curl_setopt($ch, CURLOPT_HEADER, false);
                curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
                $response = json_decode(curl_exec($ch),true);
                curl_close($ch);
                break;
        }
        return null;
    }

    public function render(): Factory|View|Application
    {
        return view('livewire.profile.payment.create');
    }

    private function createHistory($services, $servicesKey, $title, $order_id)
    {
        History::create([
            'user_id' => Auth::id(),
            'services' => $services,
            'servicesKey' => $servicesKey,
            'title' => $title,
            'price' => $this->sum,
            'status' => '0',
            'order_id' => $order_id
        ]);
    }
}
