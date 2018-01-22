'reinit'
'open  ../test.ctl'
p1=800
p2=50
tt=1
while(tt<49)
'set zlog on'
'set t 'tt''
'set x 1'
'set y 1'
'set lev 'p1' 'p2''
lon1 = 84.8099
lon2 = 86.8475
lat2 = 43.3576
lat1 = 43.7095
lon  = 80
'collect 1 free'
'collect 2 free'
 while (lon <= 88)
  lat = lat1 + (lat2-lat1)*(lon-lon1) / (lon2-lon1)
'collect 1 gr2stn(mag(u,v),'lon','lat')'
'collect 2 gr2stn(w,'lon','lat')'
 lon = lon + 0.02
 endwhile
 
'set lon 80 88'
'set parea 0.6 9.5 0.5 8'
'set grid off'
'set grads off'
'set csmooth on'
'set ylint 100'
'set ylopts  1 6 0.15'
'set xlopts  1 6 0.15'
'set lon 80 88'

'set gxout shaded'
'd smth9(smth9(coll2gr(1,-u)))'
'set strsiz 2 12 0.18'
'cbarn 1 1 10 5'
'set gxout contour'
'set clab masked'
'set clopts  2 2 0.12'
'set clevs -3 -2 -1 1 2 3'
'd coll2gr(2,-u)'

ln=80
  i=1
  while(ln<=88)
    lt=lat1+(lat2-lat1)*(ln-lon1)/(lon2-lon1)
    'set lon 'ln
    'set lat 'lt
    'set z 1'
    'd psfc*0.00835'
    res1=sublin(result,2)
    top=subwrd(res1,4)

    'q w2xy 'ln' 'p1''
    res2=sublin(result,1)
    tx=subwrd(res2,3)
    ty=subwrd(res2,6)

    if(top<p1)
    'q w2xy 'ln' 'top
    res3=sublin(result,1)
    mt=subwrd(res3,6)

    'set line 1 1 6'
    'draw line 'tx' 'ty' 'tx' 'mt
    endif

    ln=ln+0.002
    i=i+1
  endwhile
  
'q time'
time=subwrd(result,3)

'draw title horizontal wind/vertical wind 'time''
'printim ./wind2w/wind2w_'tt'.png x1000 y1000 white'
'c'
tt=tt+1
endwhile
;
