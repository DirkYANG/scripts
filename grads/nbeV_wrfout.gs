'reinit'
'open  nbe38.ctl'
'set gxout shaded'
tt=1
while (tt <= 17)
'set t 'tt''
'set x 1'
'set y 1'
'set lev 550 100'

lon1 = 84.8099
lon2 = 86.8475
lat2 = 43.7095
lat1 = 43.3576
lon  = 84
'collect 1 free'
 while (lon <= 87)

 lat = lat1 + (lat2-lat1)*(lon-lon1) / (lon2-lon1)
'collect 1 gr2stn(nbeterm,'lon','lat')'
 lon = lon + 0.02
 endwhile
'set lon 81 88'
'd coll2gr(1,-u)'
'cbar'
'q time'
time=subwrd(result,3)
'draw title nbeterm 'time''
'printim ./nbe_v/nbeterm_'time'.png x1000 y1000 white'
tt=tt+1
'c'
endwhile
;
