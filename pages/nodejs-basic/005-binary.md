---
title: 005 二进制数
---

> 在线进制转换 https://www.sojson.com/hexconvert.html

## 1. 二进制
二进制数（binaries）是逢2进位的进位制，0、1是基本算符。

### 1.1 特性
1、如果一个二进制数（整型）数的第零位的值是1，那么这个数就是奇数；而如果该位是0，那么这个数就是偶数。

## 2. N进制
- 十进制：有10个基数：0、1、2、3、4、5、6、7、8、9，逢十进一
- 二进制：有2 个基数：0、1，逢二进一
- 八进制：有8个基数：0、1、2、3、4、5、6、7，逢八进一
- 十六进制：有16个基数：0、1、2、3、4、5、6、7、8、9、A、B、C、D、E、F，逢十六进一

## 3. 进制转换
![20230227091616](http://s3.airtlab.com/blog/20230227091616.png)
https://zhuanlan.zhihu.com/p/459817484 

## 4. 负数的表示
- 求出原码
- 求出反码
- 求出补码

演示 -5 的二进制计算过程：
- 5的原码： 101 => 0000 0101
- 求出反码：    => 1111 1010
- 求出补码：    => 1111 1011

如果要表示16位的-5，在左边添上8个1即
1111 1111 1111 1011

**逆运算**
比如知道一个补码: 1111 1011
- 根据补码得到反码: 1111 1010
- 根据反码得到原码：0000  0101 => 5

### 4.1 最高位上的1和0是表示正负，还是不表示正负？
二进制是表示计数的一种方法，用二进制计数时，用最高位上的1和0来代表这个数的正与负，这样的数就称为“有符号数”，同时也存在着“无符号数”。

那若给出一个用二进制表示出来的数，如何分辨最高位上的1和0是表示正负，还是不表示正负？

比如 11010110:
- 无符号数表示：214
- 有符号数表示：-42
  - 根据补码得到反码：11010110 - 1 = 11010101
  - 根据反码得到原码：00101010 => 42

这个是人为定义的，假如 int 占用1个字节，那么:
```c
// 定义有符号 -128 ——— 0 ———- 127
int a

// 定义无符号 0 —————– 255
unsigned int b
```

## 5. 浮点数的表示
![20230227232435](http://s3.airtlab.com/blog/20230227232435.png)

很多人都遇到过这个问题 “0.1 + 0.2 == 0.3?” 答案是不一定：
> 这主要是因为有的小数无法可以用「完整」的二进制来表示，所以计算机里只能采用近似数的方式来保存，那两个近似数相加，得到的必然也是一个近似数。https://xiaolincoding.com/os/1_hardware/float.html

- double 的有效数字是 15~16 位
- float 的有效数字是 7~8 位

这些有效位是包含整数部分和小数部分；