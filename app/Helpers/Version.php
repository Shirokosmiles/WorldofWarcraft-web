<?php

namespace App\Helpers;

class Version
{

    static public function passwordHash($serverType, $email, $password) {
        switch ($serverType) {
            case 1:

                break;
            case 2:

                break;
            case 3:
                    return strtoupper(sha1(strtoupper($email . ':' . $password)));
                break;
            case 4:

                break;
            case 5:

                break;
            case 6:

                break;
            case 7:
                return strtoupper(bin2hex(strrev(hex2bin(strtoupper(hash("sha256",strtoupper(hash("sha256", strtoupper($email)).":".strtoupper($password))))))));
            default:
                return null;
        }
    }
}
