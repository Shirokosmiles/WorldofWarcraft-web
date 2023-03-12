<x-slot name="header">
    <h2 class="font-semibold text-xl text-gray-800 leading-tight">
        Manage Home Page
    </h2>
</x-slot>

<div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg px-4 py-4">
            @if (session()->has('message'))
                <div class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md my-3" role="alert">
                    <div class="flex">
                        <div>
                            <p class="text-sm">{{ session('message') }}</p>
                        </div>
                    </div>
                </div>
            @endif

            <button wire:click="create()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
             my-3">Create</button>

            @if($isOpen)
                @include('admin.users.create')
            @endif

            <table class="table-fixed w-full">
                <thead>
                <tr class="bg-gray-100">
                    <th class="px-4 py-2 w-20">No.</th>
                    <th class="px-4 py-2">Video</th>
                    <th class="px-4 py-2">Images</th>
                    <th class="px-4 py-2">Phone Images</th>
                    <th class="px-4 py-2">Created At</th>
                    <th class="px-4 py-2">Action</th>
                </tr>
                </thead>
                <tbody>
                @foreach($data as $item)
                    <tr>
                        <td class="border px-4 py-2">{{ $item->id }}</td>
                        <td class="border px-4 py-2">
                            <video class="VideoPane-video" src="{{ $item->video }}" data-src="{{ $item->video }}" loop="loop" muted="muted" autoplay="autoplay" playsinline="playsinline"></video>
                        </td>
                        <td class="border px-4 py-2">
                            <img src="{{ $item->images }}"/>
                        </td>
                        <td class="border px-4 py-2">
                            <img src="{{ $item->phone_images }}"/>
                        </td>
                        <td class="border px-4 py-2">
                            {{ $item->created_at }}
                        </td>
                        <td class="border px-4 py-2">
                            <button wire:click="edit({{ $item->id }})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Edit
                            </button>
                            @if(Auth::user()->type === 'webdev')
                                <button wire:click="delete({{ $item->id }})" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            @endif
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>
