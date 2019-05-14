# weekly-date-picker
- 按周显示并选择日期

# 效果
- [Live Demo](https://littlegauze.github.io/weekly-date-picker/)

![效果图](http://sources.gauze.life/weekly-picker-demo.png)

# 使用
- 直接将`src/WeekCalendar`组件拷贝到项目中使用。

```js
import WeekCalendar from 'path-to-dir/WeekCalendar';
```

```js
<WeekCalendar date={/* 默认选中的日期 */} onDateChange={/* 回调函数（返回格式为'YYYY-MM-DD'的日期字符串） */} />
```

# 依赖
- react
- antd
- moment
- classnames
