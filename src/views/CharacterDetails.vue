<template>
    <view-wrapper>
        <div class="character-details-wrapper" v-if="Object.keys(getCharacterDetails)">
            <!-- bio -->
            <character-bio
            :character="characterDetails">
                <!-- control panel -->
                <control-panel
                :panelId="getCharacterDetails.id"
                :internalCharacter="location === INTERNAL"
                @edit="editCharacterHandler"
                @add="addToCollectionHandler"/>
            </character-bio>

            <!-- comics list -->
            <character-info-list
            :title="t('comics')"
            :entries="characterDetails.comics"/>

            <!-- stories list -->
            <character-info-list
            :title="t('stories')"
            :entries="characterDetails.stories"/>

            <!-- events list -->
            <character-info-list
            :title="t('events')"
            :entries="characterDetails.events"/>

            <!-- series list -->
            <character-info-list
            :title="t('series')"
            :entries="characterDetails.series"/>
        </div>
    </view-wrapper>

    <!-- feedback toast -->
    <app-toast
    v-if="displayToast"
    :message="toastMessage"
    :content="toastContent"
    :type="toastType"
    @close="displayToast = false"/>

</template>

<script setup>
import { onBeforeUnmount, ref, computed } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import CharacterBio from '@/components/characters/CharacterBio'
import ControlPanel from '@/components/generic/panels/ControlPanel'
import CharacterInfoList from '@/components/characters/CharacterInfoList'
import AppToast from '@/components/generic/feedback/Toast'
import { ERROR, SUCCESS } from '@/assets/constants/feedbackTypes'
import { INTERNAL } from '@/assets/constants/dataLocations'
import { mapActions, mapGetters } from '@/store/helpers/mappers'
import { moduleMapper } from '@/store/helpers/modules.map'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
const id = route.params.id
const location = route.params.location

/** external data */
const {
    fetchCharacterById,
    clearCharacterDetails
} = mapActions(moduleMapper.CHARACTERS)

const { getCharacterDetails } = mapGetters(moduleMapper.CHARACTERS)

/** internal data */

const {
    addNewCharacter,
    fetchMyCharacterById
} = mapActions(moduleMapper.MY_CHARACTERS)

const { getMyCharacterDetails } = mapGetters(moduleMapper.MY_CHARACTERS)

const displayToast = ref(false)
const toastMessage = ref('')
const toastContent = ref('')
const toastType = ref('')

/** initial data fetch based on the location of the data
It can either be INTERNAL or EXTERNAL
When INTERNAL it means it is a local character and will be used the localStorage
WHEN EXTERNAL it means information from the api
*/
if (location === INTERNAL) {
    fetchMyCharacterById(id)
} else {
    fetchCharacterById(id)
}

/** init the panel to edit the character, in this case
we will be using the getCharacterDetails getter, so the
id that we receive from the event is not used at all
@id { string numner } id of the character
@return { void }
*/
const editCharacterHandler = () => {
    console.log('edit character')
}

const characterDetails = computed(() => {
    if (location === INTERNAL) return getMyCharacterDetails.value
    return getCharacterDetails.value
})

/** add the character to the collection, in this case
we will be using the getCharacterDetails getter, so the
id that we receive from the event is not used at all
@id { string numner } id of the character
@return { void }
*/
const addToCollectionHandler = async () => {
    try {
        await addNewCharacter(getCharacterDetails.value)
        displayToast.value = true
        toastMessage.value = `${t('addedSuccess')} ${getCharacterDetails.value.name}`
        toastContent.value = t('addedMessage')
        toastType.value = SUCCESS
    } catch (err) {
        displayToast.value = true
        toastMessage.value = `${t('repeated')} ${err.message}`
        toastContent.value = t('repeatedCharacter')
        toastType.value = ERROR
    }
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
