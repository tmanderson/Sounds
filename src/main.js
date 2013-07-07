require(['buffman'], function(bm) {

    var sounds = bm.create('/assets/audio/').load({
        kick: [
            'CLudwigKick-Dyn12.WAV'
        ],
        tom1: [
            'CLudwigTom1-DynLH12.WAV',
            'CLudwigTom1-DynRH12.WAV'
        ],
        tom2: [
            'CLudwigTom2-DynLH12.WAV',
            'CLudwigTom2-DynRH12.WAV'
        ],
        snare: [
            'Rodgers_DynLH12.WAV',
            'Rodgers_DynRH12.WAV',
            'Rodgers_HrdLH07.WAV',
            'Rodgers_HrdRH07.WAV',
            'Rodgers_RimClck07.WAV'
        ],
        hh: [
            'ZildMstrsnd-DynPed10.WAV'
        ],
        ride: [
            'SabHHXEvo20-Dyn12.wav'
        ]
    });

    window.addEventListener('keydown', function(e) {
        switch(e.keyCode) {
            case 32: sounds.play('kick', 0); break;
            case 81: sounds.play('tom1', 0); break;
            case 87: sounds.play('tom2', 0); break;
            case 76: sounds.play('hh', 0); break;
            case 75: sounds.play('snare', 0);
        }
    });

});