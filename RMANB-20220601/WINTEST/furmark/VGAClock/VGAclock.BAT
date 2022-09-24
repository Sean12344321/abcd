@ECHO OFF
cd\
cd\nbtest\runin\3dmark\VGAClock\
if exist NV_clock.log del NV_clock.log
ThermSpyPremium -header:gpu -datetime -log:NV_clock.log



