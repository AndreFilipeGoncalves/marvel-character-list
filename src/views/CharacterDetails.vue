<template>
    <view-wrapper>
        <div class="character-details-wrapper">
            <!-- bio -->
            <character-bio
            v-if="Object.keys(getCharacterDetails)"
            :character="getCharacterDetails">
                <!-- control panel -->
                <control-panel
                :panelId="getCharacterDetails.id"
                @edit="editCharacterHandler"
                @add="addToCollectionHandler"/>
            </character-bio>

            <!-- comics list -->

            <!-- stories list -->

            <!-- events list -->

            <!-- series list -->

        </div>
    </view-wrapper>
</template>

<script setup>
import { onBeforeUnmount } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import CharacterBio from '@/components/characters/CharacterBio'
import ControlPanel from '@/components/generic/panels/ControlPanel'
import { mapActions, mapGetters } from '@/store/helpers/mappers'
import { moduleMapper } from '@/store/helpers/modules.map'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const id = route.params.id

const {
    fetchCharacterById,
    clearCharacterDetails
} = mapActions(moduleMapper.CHARACTERS)
const { getCharacterDetails } = mapGetters(moduleMapper.CHARACTERS)

fetchCharacterById(id)

/** init the panel to edit the character, in this case
we will be using the getCharacterDetails getter, so the
id that we receive from the event is not used at all
@id { string numner } id of the character
@return { void }
*/
const editCharacterHandler = () => {
    console.log('edit character')
}

/** add the character to the collection, in this case
we will be using the getCharacterDetails getter, so the
id that we receive from the event is not used at all
@id { string numner } id of the character
@return { void }
*/
const addToCollectionHandler = () => {
    console.log('add to collection')
}

// clears info about the character before unmounting the view
onBeforeUnmount(() => { clearCharacterDetails() })

</script>

<style lang="scss">
.character-details-wrapper {
    width:100%;
    display:flex;
    flex-direction:column;
    gap: 20px;
}
</style>
