<template>
  <div class="modal inline-block">
    <mash-component :show="showModal"></mash-component>
	<transition-scale 
		:show="showModal" 
		:on-cancelfn="onCancel" 
		:titles="titles"
		:content="content"
		:footer="footer"
		:on-okfn="onOk"><slot></slot></transition-scale>
		
  </div>
</template>

<script>
import MashComponent from '../mask'
import TransitionScale from './coms/transition-scale'
export default {
	name: 'Modal',
	components: {
		MashComponent,
		TransitionScale
	},
	props: {
		show: {
            type: Boolean,
            default: false
        },
        titles: {
            type: [String, Boolean],
            default: ''
        },
        content: {
            type: String,
            default: ''
        },
        footer: {
            type: Boolean,
            default: true
        },
		showModal: {
			type: Boolean,
			default: false
		},
		onCancelfn: Function,
		onOkfn: Function
	},
	methods: {
		onOk() {
            if(this.onOkfn) {
                this.onOkfn()
            }
        },
		onCancel() {
			if(this.onCancelfn) {
                this.onCancelfn()
            }
		}
	},
	computed: {
		
	}
}
</script>

<style lang="scss">

</style>
