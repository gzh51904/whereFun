<template>
    <div>
        <col1 db="中南美" index="0"/>
        <col2 db="中南美" index="1"/>
        <col3/>
    </div>
</template>
<script>
import col1 from './col1';
import col2 from './col2';
import col3 from './col3';
export default {
    components : {
        col1,
        col2,
        col3
    }
}
</script>