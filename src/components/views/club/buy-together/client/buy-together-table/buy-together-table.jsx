import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

import {
    StyledWrapper,
    StyledTitle,
    StyledText,
    StyledLink,
    StyledContent,
    StyledContainer,
    StyledSubText,
    StyledDetail
} from './buy-together-table.styled'
import Table from '../../../../../shared/table'
import Paths from '../../../../../../utils/paths'
import Button from '../../../../../shared/button'
import IconProvider from '../../../../../../providers/icon/icon-provider'
import { buttonVariants } from '../../../../../../constants/button-configs'
import BadgeButton from '../../../../../shared/badge-button'
import { badgeButtonVariants } from '../../../../../../constants/badge-button-config'
import Select from '../../../../../shared/form/select'
import Confirm from '../../../../../dialogs/club/confirm'

const data = [
    { buyTogether: "محسن جهانی خدابنده لو", email: "ahmad.n33@gmail.com", status: { confirm: 1, date: "‏1 فروردین 1399" }, href: Paths.home.getPath() },
    { buyTogether: "احسان جلالی", email: "ahmad.n33@gmail.com", status: { confirm: 3, date: "‏1 فروردین 1399" }, href: Paths.home.getPath() },
]

const BuyTogetherTable = () => {
    const { t } = useTranslation()
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [configItem, setConfigItem] = useState(null)

    const OnConfirmClose = () => {
        setShowConfirmModal(false)

    }
    const onConfirmOpen = (item) => {
        setConfigItem(item)
        setShowConfirmModal(true)
    }

    const OnRemove = (id) => {
        console.log(id)
    }

    const showOptions = [
        { value: '1', label: 'نمایش همه' },
        { value: '2', label: 'امتیاز کل' },
        { value: '3', label: 'امتیاز ماهانه' }
    ]

    const showChangeHandler = (selectedItem) => {

    }

    return (
        <StyledWrapper>
            <StyledContainer>
                <StyledDetail>
                    <StyledTitle>{t('plazaClubArea.buyTogether')}</StyledTitle>
                    <StyledSubText>2/10 {t('plazaClubArea.buyTogetherPerson')}</StyledSubText>
                </StyledDetail>
                <StyledDetail>
                    <Select options={showOptions} value={showOptions[0]} onChange={showChangeHandler} />
                </StyledDetail>
            </StyledContainer>

            <Table
                headerConfig={[
                    { title: t('plazaClubArea.buyTogetherPerson') },
                    { title: t('plazaClubArea.emailOrMobile') },
                    { title: t('plazaClubArea.announced') },
                    { title: t('plazaClubArea.confirmStatus') },
                    { title: t('blank'), width: '1%' }
                ]}
                rowConfig={
                    data.map(({ buyTogether, email, status, href, phone }) => {
                        return {
                            buyTogether: <StyledText>{buyTogether}</StyledText>,
                            emailOrPhone:
                                <StyledContent>
                                    <StyledText>{email}</StyledText>
                                    <StyledText>{phone}</StyledText>
                                </StyledContent>
                            ,
                            date: <StyledText>{status.date}</StyledText>,
                            status:
                                <StyledLink to={href}>
                                    <BadgeButton
                                        status={status.confirm === badgeButtonVariants.SUCCESS ?
                                            badgeButtonVariants.SUCCESS : status.confirm === badgeButtonVariants.ERROR
                                                ? badgeButtonVariants.ERROR : badgeButtonVariants.CHECK}
                                    >
                                        {status.confirm === badgeButtonVariants.SUCCESS ?
                                            t('plazaClubArea.confirmPoints') :
                                            status.confirm === badgeButtonVariants.ERROR ?
                                                t('plazaClubArea.reject') : t('pending')}
                                    </BadgeButton>
                                </StyledLink>
                            ,
                            button:
                                <Button variant={buttonVariants.LINK} onClick={()=>onConfirmOpen(buyTogether)}>
                                    <IconProvider icon="user-delete" size="20px" />
                                </Button>
                        }
                    })
                }
            />
            <Confirm open={showConfirmModal} configItem={configItem} onClose={OnConfirmClose} OnRemove={() => OnRemove(1)} />

        </StyledWrapper>
    )
}

BuyTogetherTable.propTypes = {

}

export default BuyTogetherTable
