### el-image 通过 previewSrcList 预览大图

#### 通过this.$refs.preview.clickHandler()触发查看大图功能
```vue
<el-button @click="onPreview">预览</el-button>
<el-image ref="preview" :src="url" :preview-src-list="srcList"></el-image>

export default {
    data() {
        return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
        }
    },
    methods: {
        onPreview() {
          this.$refs.preview.clickHandler()
        },
    }
}

```