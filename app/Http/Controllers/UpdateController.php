<?php

namespace App\Http\Controllers;

use Launcher;

class UpdateController extends Controller
{
    public function getVersion()
    {
        return Launcher::getRemoteVersionStr();
    }

    public function getUpdater()
    {
        $temp[0] = Launcher::getUpdateUtil();
        return response()->json($temp);
    }

    public function update($version)
    {
        return Launcher::getUpdate($version);
    }
}
