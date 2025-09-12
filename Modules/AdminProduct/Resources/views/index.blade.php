@extends('adminproduct::layouts.master')

@section('content')
    <h1>Hello World</h1>

    <p>
        This view is loaded from module: {!! config('adminproduct.name') !!}
    </p>
@endsection
