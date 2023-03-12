<x-guest-layout>

    @push('css')
        @vite(['resources/css/3.css'])
    @endpush

    @push('scripts')
        <script src="{{ asset('static/runtime.7c6b2c574cb255b04c4f.js') }}"></script>
        <script src="{{ asset('static/vendor.148b142df29c0644a491.js') }}"></script>
        <script src="{{ asset('static/3.d15a3fea6c61801c0cfa.js') }}"></script>
        <script src="{{ asset('static/legacy-components.1cbfaef53573c17aab6b.js') }}"></script>
    @endpush

        <div class="Cookies">
            <div class="Pane Pane--underSiteNav Pane--autumn" queryselectoralways="31">
                <div class="Pane-bg">
                    <div class="Pane-overlay"></div>
                </div>
                <div class="Pane-content">
                    <div class="contain-wide">
                        <div class="Content">
                            {!! $policy !!}
                        </div>
                    </div>
                    <div class="space-large"></div>
                </div>
            </div>
        </div>
</x-guest-layout>
