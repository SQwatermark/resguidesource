<center><h1>颜色设置</h1><p>color.properties</p></center>

## 属性文件丨color.properties

你只需要设置需要修改的属性。方便起见，下面列出 Minecraft 中每个属性的默认值。

所有的属性名都区分大小写。

所有颜色都是从 000000 到 ffffff 的十六进制 rgb 格式。

除非另有说明，否则所有路径都相对于assets/minecraft。

**水的粒子效果（飞溅的水花, 气泡, 水滴）的底色**

生物群系水体颜色乘数应用于该值。该值应该与基础水纹理的颜色匹配。

如果你的基础水纹理是灰色的，那么你可以通过 misc/watercolorX.png 进行着色，并且把这个值设置为 ffffff。

```properties
particle.water=334cff
```



**传送门颗粒的底色**

RGB 值都会乘一个 0.4 到 1.0 之间的随机乘数

```properties
particle.portal=ff4ce5
```



**下界和末地颜色**

```properties
fog.nether=330707
fog.end=181318
sky.end=282828
```



**荷叶颜色**

单一颜色，应用于所有的生物群系。

```properties
lilypad=208030
```



**药水效果的颜色**

最终表现出来的颜色是这些颜色以药水效果的等级作为权重，加权平均后的结果。

```properties
potion.absorption=2552a5
potion.bad_omen=b6138
potion.blindness=1f1f23
potion.conduit_power=1dc2d1
potion.dolphins_grace=88a3be
potion.fire_resistance=e49a3a
potion.glowing=94a061
potion.haste=d9c043
potion.health_boost=f87d23
potion.hero_of_the_village=44ff44
potion.hunger=587653
potion.instant_damage=430a09
potion.instant_health=f82423
potion.invisibility=7f8392
potion.jump_boost=22ff4c
potion.levitation=ceffff
potion.luck=339900
potion.mining_fatigue=4a4217
potion.nausea=551d4a
potion.night_vision=1f1fa1
potion.poison=4e9331
potion.regeneration=cd5cab
potion.resistance=99453a
potion.saturation=f82423
potion.slow_falling=ffefd1
potion.slowness=5a6c81
potion.speed=7cafc6
potion.strength=932423
potion.unluck=c0a44d
potion.water_breathing=2e5299
potion.weakness=484d48
potion.wither=352a27
```



potion.water 代表一个普通的水瓶

```properties
potion.water=385dc6
```



**刷怪蛋颜色**

> egg.<shell|spots>.<实体名>=<颜色>

实体名可以是简化的（通常的实体名），也可以是完整的（带有命名空间的）。

完整实体名的分隔符 ":" 必须转义。

例如：

> egg.shell.creeper=0da70b
>
> egg.spots.minecraft\:creeper=000000

```properties
egg.shell.<实体名>=<颜色>
egg.spots.<实体名>=<颜色>
```



**地图颜色**

别名

> map.snow=map.white
>
> map.adobe=map.orange
>
> map.lightBlue=map.light_blue

方块在地图中的颜色

```properties
map.air=000000
map.grass=7fb238
map.sand=f7e9a3
map.cloth=c7c7c7
map.tnt=ff0000
map.ice=a0a0ff
map.iron=a7a7a7
map.foliage=007c00
map.clay=a4a8b8
map.dirt=976d4d
map.stone=707070
map.water=4040ff
map.wood=8f7748
map.quartz=fffcf5
map.gold=faee4d
map.diamond=5cdbd5
map.lapis=4a80ff
map.emerald=00d93a
map.obsidian=815631
map.netherrack=700200
```



通用地图颜色

```properties
map.white=ffffff
map.orange=d87f33
map.magenta=b24cd8
map.light_blue=6699d8
map.yellow=e5e533
map.lime=7fcc19
map.pink=f27fa5
map.gray=4c4c4c
map.light_gray=999999
map.cyan=4c7f99
map.purple=7f3fb2
map.blue=334cb2
map.brown=664c33
map.green=667f33
map.red=993333
map.black=191919
```



**陶瓦**

```properties
map.white_terracotta=d1b1a1
map.orange_terracotta=9f5224
map.magenta_terracotta=95576c
map.light_blue_terracotta=706c8a
map.yellow_terracotta=ba8524
map.lime_terracotta=677535
map.pink_terracotta=a04d4e
map.gray_terracotta=392923
map.light_gray_terracotta=876b62
map.cyan_terracotta=575c5c
map.purple_terracotta=7a4958
map.blue_terracotta=4c3e5c
map.brown_terracotta=4c3223
map.green_terracotta=4c522a
map.red_terracotta=8e3c2e
map.black_terracotta=251610
# Nether
map.crimson_nylium=bd3031
map.crimson_stem=943f61
map.crimson_hyphae=5c191d
map.warped_nylium=167e86
map.warped_stem=3a8e8c
map.warped_hyphae=562c3e
map.warped_wart_block=14b485
```



**羊的颜色**

别名

> sheep.silver=sheep.light_gray
>
> sheep.lightBlue=sheep.light_blue

```properties
sheep.white=e6e6e6
sheep.orange=ba6015
sheep.magenta=953a8d
sheep.light_blue=2b86a3
sheep.yellow=bea22d
sheep.lime=609517
sheep.pink=b6687f
sheep.gray=353b3d
sheep.light_gray=757571
sheep.cyan=107575
sheep.purple=66258a
sheep.blue=2d337f
sheep.brown=623f25
sheep.green=465d10
sheep.red=84221c
sheep.black=151518
```



**狼和猫项圈颜色**

别名

> collar.silver=collar.light_gray
>
> collar.lightBlue=collar.light_blue

```properties
collar.white=f9fffe
collar.orange=f9801d
collar.magenta=c74ebd
collar.light_blue=3ab3da
collar.yellow=fed83d
collar.lime=80c71f
collar.pink=f38baa
collar.gray=474f52
collar.light_gray=9d9d97
collar.cyan=169c9c
collar.purple=8932b8
collar.blue=3c44aa
collar.brown=835432
collar.green=5e7c16
collar.red=b02e26
collar.black=1d1d21
```



**通用染料颜色**

旗帜、信标光束、热带鱼、狼和猫项圈的基础颜色

别名

>dye.silver=dye.light_gray
>
>dye.lightBlue=dye.light_blue

```properties
dye.white=f9fffe
dye.orange=f9801d
dye.magenta=c74ebd
dye.light_blue=3ab3da
dye.yellow=fed83d
dye.lime=80c71f
dye.pink=f38baa
dye.gray=474f52
dye.light_gray=9d9d97
dye.cyan=169c9c
dye.purple=8932b8
dye.blue=3c44aa
dye.brown=835432
dye.green=5e7c16
dye.red=b02e26
dye.black=1d1d21
```



**文字颜色**

经验等级文字的颜色

```properties
text.xpbar=80ff20
```

"Boss生命值" 文字的颜色

```properties
text.boss=ff00ff
```

告示牌文字的颜色

```properties
text.sign=000000
```

由 \247 + 0123456789abcdef 生成的颜色代码

```properties
text.code.0=000000
text.code.1=0000aa
text.code.2=00aa00
text.code.3=00aaaa
text.code.4=aa0000
text.code.5=aa00aa
text.code.6=ffaa00
text.code.7=aaaaaa
text.code.8=555555
text.code.9=5555ff
text.code.10=55ff55
text.code.11=55ffff
text.code.12=ff5555
text.code.13=ff55ff
text.code.14=ffff55
text.code.15=ffffff
text.code.16=000000
text.code.17=00002a
text.code.18=002a00
text.code.19=002a2a
text.code.20=2a0000
text.code.21=2a002a
text.code.22=2a2a00
text.code.23=2a2a2a
text.code.24=151515
text.code.25=15153f
text.code.26=153f15
text.code.27=153f3f
text.code.28=3f1515
text.code.29=3f153f
text.code.30=3f3f15
text.code.31=3f3f3f
```



**资源载入画面**

背景颜色

```properties
screen.loading=ffffff
```

加载条背景颜色

```properties
screen.loading.bar=ffffff
```

加载条边框颜色

```properties
screen.loading.outline=000000
```

加载条前景颜色

```properties
screen.loading.progress=e22837
```

Logo 混合模式

src, dst, srcA 和 dstA 是以下之一：

> ZERO, ONE, SRC_COLOR, ONE_MINUS_SRC_COLOR, DST_COLOR, ONE_MINUS_DST_COLOR,
>  SRC_ALPHA, ONE_MINUS_SRC_ALPHA, DST_ALPHA, ONE_MINUS_DST_ALPHA, SRC_ALPHA_SATURATE

```properties
screen.loading.blend=<off|src dst srcA dstA>
```



**其他设置项**

这个设置会覆盖视频设置中的云的类型。

```properties
clouds=fast(快速)|fancy(高品质)|off(关闭)
```



经验球动画持续时间（毫秒）默认为 628 毫秒

```properties
xporb.time=628
```

