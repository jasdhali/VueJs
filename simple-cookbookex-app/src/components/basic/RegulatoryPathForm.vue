<template>
<div id="regform">
  <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2">
    <b-dropdown-item>First Action</b-dropdown-item>
    <b-dropdown-item>Second Action</b-dropdown-item>
    <b-dropdown-item>Third Action</b-dropdown-item>
    <b-dropdown-divider></b-dropdown-divider>
    <b-dropdown-item active>Active action</b-dropdown-item>
    <b-dropdown-item disabled>Disabled action</b-dropdown-item>
  </b-dropdown>
</div>
</template>

<script>
    export default {
    
}
</script>

<style>
    body {
        background: #20262E;
        padding: 20px;
        font-family: Helvetica;
    }
    
    #regform {
        background: #fff;
        border-radius: 2px;
        padding: 10px;
        transition: all 0.2s;
    }
    .price {
        text-align: right
    }
    li {
        margin: 8px 0;
    }
    
    h2 {
        font-weight: bold;
        margin-bottom: 15px;
    }
    
    del {
        color: rgba(0, 0, 0, 0.3);
    }
    .ascending:after {
        content: "25B2"
    }
    .descending:after {
        content: "25BC"
    }
</style>