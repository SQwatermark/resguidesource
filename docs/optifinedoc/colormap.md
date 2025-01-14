<center><h1>颜色映射</h1><p>colormap.properties</p></center>

## 属性文件丨colormap.properties

除了像 pine.png 或 underwater.png 这样的 "固定的" colormap，每个自定义 colormap 必须有一个属性文件，可放在optifine/colormap/blocks 或者其任何子文件夹下。

所有的属性名都区分大小写。

所有颜色都使用从 000000 到 ffffff 的十六进制 rgb 格式。

除非另有说明，否则所有路径都相对于 assets/minecraft。

**调色板格式**

- fixed：单个固定的颜色，不需要图片。如要去除原版的生物群系着色，可使用此格式，而无需设置一张 256x256 的全白 colormap。
- vanilla：原版通过温度+湿度控制的，尺寸为 256x256 的映射，受到不同生物群系共享相同的基础温度+湿度值的限制。
- grid：OptiFine 样式的，尺寸为 256x256（x=生物群系ID，y=高度）的网格映射。每一列表示一个生物群系在不同高度的颜色。未使用的列应该使用合理的默认颜色梯度填充，以适应模组添加的生物群系。

默认格式为 vanilla，但是可以通过在 ~/color.properties 中设置调色板格式来全局覆盖此属性。

```properties
format=<fixed | vanilla | grid>
```



**（可选）此 colormap 适用的方块列表，可附带属性**

在 1.7 中，方块是通过名称而不是数字来表示的。旧方块支持数字 ID，但新方块将只支持名称。

例如，石头可以称为

> stone       （无前缀的名称）
> minecraft:stone （全名）

为所有石头和矿石方块着色：

> blocks=stone gold_ore iron_ore coal_ore lapis_ore diamond_ore redstone_ore redstone_ore:lit=true

方块+属性也支持下列语法：

> blocks=minecraft:lever:face=wall:facing=east,west

如果没有设置 (或者没有属性文件)，它会默认按照文件名，例如：

> assets/minecraft/optifine/colormap/custom/stone.png -> minecraft:stone

```properties
blocks=<方块列表+可选属性>
```



**（仅用于format=fixed或vanilla）colormap 图片**

路径可以相对于属性文件的位置。

图片尺寸应该是 256x256。

如果没有提供源文件，默认使用与属性文件名称相同的 png 图片。

```properties
source=<image>
```



**（可选）固定 RGB 颜色**

对于format=fixed，这只是应用于所有匹配方块的固定颜色。

如果没有给出值，则默认值为白色（ffffff）。

对于 format=vanilla 或 grid，这是用于手持或掉落方块的默认颜色。如果没有给出值，则根据格式从固定
位置提取默认颜色：

> format=vanilla: x=127,y=127 （位图的正中心）
>
> format=grid:  x=1,y=64 （海平面的平原生物群系）

```properties
color=<十六进制rgb值>
```



**（仅用于format=grid）y 差异**

在从 colormap 采样之前，将方块的 y 坐标加上一定数量的随机噪声。

例如，值为 2.0 时，会在 y - 2 到 y + 2 之间随机选择一个值。

默认值为 0（无差异）。

```properties
yVariance=<值>
```



**（仅用于format=grid）y 偏移**

在从 colormap 采样之前，将方块的 y 坐标减去一个固定值。

例如，值为 64 时，位于 0 到 64 格高度的方块将使用 colormap 中 y=0 的颜色。

高度为 65 的方块将使用 y=1 的颜色，高度为 66 的方块将使用 y=2 的颜色，以此类推。

默认值为0（无偏移）。

```properties
yOffset=<值>
```

