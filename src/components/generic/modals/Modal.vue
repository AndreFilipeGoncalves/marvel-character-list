<template>
    <div class="overlay">
        <div class="modal">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss">
.overlay {
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

    background-color: rgba(0, 0, 0, 0.2);
    .modal {
        width: 80%;
        height:80%;
        background-color: var(--white);

        box-sizing:border-box;
        border-radius:12px;
        padding:10px;
        overflow:hidden;
    }
}
</style>
