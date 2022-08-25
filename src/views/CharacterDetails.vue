<template>
    <view-wrapper>
        <div
        class="character-details-wrapper"
        v-if="Object.keys(getCharacterDetails)">
            <!-- bio -->
            <character-bio
            :character="characterDetails">
                <!-- control panel -->
                <control-panel
                :panelId="getCharacterDetails.id"
                :internalCharacter="location === INTERNAL"
                @edit="displayEditor = true"
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

    <!-- character edit -->
    <modal v-if="displayEditor">
        <character-editor
        :character="characterDetails"
        closeCross
        @close="displayEditor = false"
        @save:character="saveCharacterHandler"/>
    </modal>

</template>

<script setup>
import { onBeforeUnmount, ref, computed } from 'vue'
import ViewWrapper from '@/components/wrappers/ViewWrapper'
import CharacterBio from '@/components/characters/CharacterBio'
import ControlPanel from '@/components/generic/panels/ControlPanel'
import CharacterInfoList from '@/components/characters/CharacterInfoList'
import AppToast from '@/components/generic/feedback/Toast'
import CharacterEditor from '@/components/characters/CharacterEditor'
import Modal from '@/components/generic/modals/Modal'
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
    fetchMyCharacterByName,
    updateMyCharacter
} = mapActions(moduleMapper.MY_CHARACTERS)

const { getMyCharacterDetails } = mapGetters(moduleMapper.MY_CHARACTERS)

const displayToast = ref(false)
const toastMessage = ref('')
const toastContent = ref('')
const toastType = ref('')
const displayEditor = ref(false)

/** initial data fetch based on the location of the data
It can either be INTERNAL or EXTERNAL
When INTERNAL it means it is a local character and will be used the localStorage
When INTERNAL the name is used as ID so we avoid to create ids for our characters
When EXTERNAL it means information from the api
*/
if (location === INTERNAL) {
    fetchMyCharacterByName(id)
} else {
    fetchCharacterById(id)
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
        displayToastHandler(
            `${t('addedSuccess')} ${getCharacterDetails.value.name}`,
            t('addedMessage'),
            SUCCESS
        )
    } catch (err) {
        displayToastHandler(`${t('repeated')} ${err.message}`, t('repeatedCharacter'), ERROR)
    }
}

/** saves the information about the character
@image { string } - base64 image of the character
@name { string } - new name for the character
@description { string } - new description for the character
@return { void }
*/
const saveCharacterHandler = async (data) => {
    try {
        await updateMyCharacter(data)
        displayEditor.value = false
        displayToastHandler(
            `${t('updated')} ${data.oldName}`,
            t('updatedSuccess'),
            SUCCESS
        )
    } catch (err) {
        displayToastHandler(t('error'), t('errorMessage'), ERROR)
    }
}

/** display the toast with the params received
@message { string } - message to be displayed on the head
@content { string } - message to be displayed on the body
@type { string } - type of toast
*/
const displayToastHandler = (message, content, type) => {
    displayToast.value = true
    toastMessage.value = message
    toastContent.value = content
    toastType.value = type
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
