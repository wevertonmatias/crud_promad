<?php

namespace app\assets;

use yii\web\AssetBundle;

class MyAsset extends AssetBundle
{
    public $basePath = '@webroot';
    public $baseUrl = '@web';

    public $css = [
        'css/my-style.css'
    ];

    public $js = [
        'js/my-js.js'
    ];

    public $depends = [
        'yii\web\JqueryAsset',
        'app\assets\InputMaskAsset',
    ];
}