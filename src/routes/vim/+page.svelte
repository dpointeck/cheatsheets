<script lang="ts">

    export let data: {content: { test: string, intro: string }};
    console.log(data);
</script>

<div>
    {@html data.content.intro}
</div>
<pre>{ data.content.test }</pre>
