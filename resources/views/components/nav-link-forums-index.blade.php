@props(['active', 'title'])

@php
    $classes = ($active ?? false) ? 'active' : '';
@endphp


<li id="ember38" class="{{ $classes }} ember-view">
    <a {{ $attributes->merge(['class' => $classes]) }}>
        {{ $slot }}
    </a>
</li>
