'reinit'
'open  u20down.ctl'
'open  v20down.ctl'
'set gxout fwrite'
'set fwrite wind20down.dat'
tt=1
while (tt <= 577)
'set lon 78 84'
'set lat 41 44'
'set t 'tt''
zz=9
while(zz<=35)
'set z 'zz
'define wind =sqrt(U.1*U.1+V.2*V.2)'
'd wind'
zz=zz+1
endwhile
tt=tt+72
endwhile
'disable fwrite'
'c'
;
