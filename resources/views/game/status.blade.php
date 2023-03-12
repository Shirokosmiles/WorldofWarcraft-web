<x-guest-layout>

    @push('css')
        @vite(['resources/css/3.css', 'resources/css/realm-status.css'])
    @endpush

    @push('scripts')
        <script src="{{ asset('static/runtime.7c6b2c574cb255b04c4f.js') }}"></script>
        <script src="{{ asset('static/vendor.148b142df29c0644a491.js') }}"></script>
        <script src="{{ asset('static/1.5fb4e0c1044b0c325adf.js') }}"></script>
        <script src="{{ asset('static/3.d15a3fea6c61801c0cfa.js') }}"></script>
        <script src="{{ asset('static/4.43ea0901f19b5b3c0fc8.js') }}"></script>
        <script src="{{ asset('static/6.45de3115388c7527b1bc.js') }}"></script>
        <script src="{{ asset('static/10.17e5ef80b22a3fba454f.js') }}"></script>
        <script src="{{ asset('static/realm-status.332924887f71baca7376.js') }}"></script>
    @endpush

    <div class="Pane Pane--dirtDark Pane--full z-index-above" queryselectoralways="31">
        <div class="Pane-bg">
            <div class="Pane-overlay"></div>
        </div>
        <div class="Pane-content">
            <div class="react-mount" id="realm-status-mount" data-initial-state-variable-name="realmStatusInitialState"></div>
        </div>
    </div>

</x-guest-layout>
