<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    try {
        DB::select('select 1');
        $database = 'ok';
    } catch (Throwable $e) {
        report($e);
        $database = 'error';
    }

    $payload = [
        'status' => $database === 'ok' ? 'ok' : 'degraded',
        'database' => $database,
        'time' => now()->toIso8601String(),
    ];

    if (app()->isLocal()) {
        $payload['driver'] = DB::connection()->getDriverName();
    }

    return response()->json($payload, $database === 'ok' ? 200 : 503);
});