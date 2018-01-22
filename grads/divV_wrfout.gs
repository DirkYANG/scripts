'reinit'
'open  ./div.ctl'
'open  ./dynamic.ctl'
p1=1000
p2=50

******the range to display in the picture******
lons1=82
lons2=84

tt=1
while(tt<=25)
'set parea 0.6 9.5 0.5 8'
'set dfile 1'
'set grid off'
'set grads off'
'set zlog on'
'set t 'tt''
'set x 1'
'set y 1'
'set lev 'p1' 'p2''
lon1 = 81.9931
lon2 = 84.584
lat2 = 40.776
lat1 = 41.9584
lon  = lons1
'collect 1 free'
while (lon <= lons2)
lat = lat1 + (lat2-lat1)*(lon-lon1) / (lon2-lon1)
'collect 1 gr2stn(div,'lon','lat')'
lon = lon + 0.02
endwhile
 
'set lon 'lons1' 'lons2''
'set csmooth on'
'set ylint 100'
'set ylopts  1 6 0.15'
'set xlopts  1 6 0.15'

'set gxout shaded'
'set clevs -4e-4 -2e-4 -1e-4 0 1e-4 2e-4 4e-4'
'd coll2gr(1,-u)'

'cbarn 1 1 10 5'

ln=lons1
while(ln<=lons2) 
lt=lat1+(lat2-lat1)*(ln-lon1)/(lon2-lon1)
'set dfile 2'
'set lon 'ln
'set lat 'lt
'set z 1'
'd psfc*0.008'
res1=sublin(result,2)
top=subwrd(res1,4)
'q w2xy 'ln' 'p1''
res2=sublin(result,1)
tx1=subwrd(res2,3)
ty1=subwrd(res2,6)

'q w2xy 'ln' 'top
res3=sublin(result,1)
mt1=subwrd(res3,6)

ln=ln+0.01
lt=lat1+(lat2-lat1)*(ln-lon1)/(lon2-lon1)
'set lon 'ln''
'set lat 'lt''
'set z 1'
'd psfc.2*0.008'
res1=sublin(result,2)
top=subwrd(res1,4)

'q w2xy 'ln' 'p1''
res2=sublin(result,1)
tx2=subwrd(res2,3)
ty2=subwrd(res2,6)

'q w2xy 'ln' 'top
res3=sublin(result,1)
mt2=subwrd(res3,6)

'set line 1 1 12'
*'draw polyf 'tx1' 'ty1' 'tx1' 'mt1' 'tx2' 'ty2' 'tx2' 'mt2''
'draw recf 'tx1' 'ty1' 'tx2' 'mt2''
endwhile
  
'q time'
time=subwrd(result,3)

'draw title divergence 'time''
'printim ./div_v/div_'tt'.png x1000 y1000 white'
'c'
tt=tt+1
endwhile
;
