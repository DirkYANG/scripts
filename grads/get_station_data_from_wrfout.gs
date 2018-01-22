'reinit'
'open  skew.ctl'
'set gxout fwrite'
'set fwrite /Users/yangrui/Documents/research/bositeng/wrfout_1209/sounding/station.dat'

tt=1
while (tt <=1)
'set t 'tt''
'set x 1'
'set y 1'
'set lev 1000 100'
lon1 = 86.5
lat1 = 42.5
'collect 1 free'
lon=86
while(lon<= 87)
'collect 1 gr2stn(tc,'lon','lat1')'
lon=lon+0.5
endwhile
'set lon 86 87'
'd coll2gr(1,-u)'

'set t 'tt''
'set x 1'
'set y 1'
'set lev 1000 100'
lon1 = 86.5
lat1 = 42.5
'collect 2 free'
lon=86
while(lon<= 87)
'collect 2 gr2stn(td,'lon','lat1')'
lon=lon+0.5
endwhile
'set lon 86 87'
'd coll2gr(2,-u)'

'set t 'tt''
'set x 1'
'set y 1'
'set lev 1000 100'
lon1 = 86.5
lat1 = 42.5
'collect 3 free'
lon=86
while (lon <= 87)
'collect 3 gr2stn(wspd,'lon','lat1')'
lon=lon+0.5
endwhile
'set lon 86 87'
'd coll2gr(3,-u)'

'set t 'tt''
'set x 1'
'set y 1'
'set lev 1000 100'
lon1 = 86.5
lat1 = 42.5
'collect 4 free'
lon=86
while (lon <= 87)
'collect 4 gr2stn(wdir,'lon','lat1')'
lon=lon+0.5
endwhile
'set lon 86 87'
'd coll2gr(4,-u)'

tt=tt+1
endwhile
'disable fwrite'
'c'
;