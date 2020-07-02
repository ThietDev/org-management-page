const elements = {
    emailTextBox: '[name="emailOrUsername"]',
    passwordTextBox: '[name="password"]',
    orgManagementPage: '//a[contains(@href, "/organization/groups")]',
    groupText: '//p[contains(text(), "Group")]',
    descriptionText: '//p[contains(text(), "Description")]',
    userText: '//p[contains(text(), "User")]',
    deviceText: '//p[contains(text(), "Device")]',
    addButtonText: '//button[contains(text(), "+ ADD")]',
    orgEditIcon: '//div/div/div/h1[contains(text(), "Kobiton")]/following-sibling::span")]',
    editOrganizationText: '//h2[contains(text(), "Edit Organization")]',
    organizationNameTextBox: '//input[contains(@placeholder, "Enter Organization name here")]',
    updateButton: '//div/div/div/h2[contains(text(), "Edit Group")]/following-sibling::p/button[contains(text(), "UPDATE")]',
    compulsoryMessage: '//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]',
    organizationDescriptionTextBox: '//input[contains(@placeholder, "Enter Organization description here")]',
    orgDescriptionMessage: '//p[contains(text(), "Description cannot exceed 150 characters.")]',
    editTextHover: '//div[contains(text(), "Edit")]',
    plusAddButton: '//button[contains(text(), "+ ADD")]',
    addNewGroupText: '//h2[contains(text(), "Add New Group")',
    groupNameTextBox: '//input[contains(@placeholder, "Enter Group name here")]',
    groupDescriptionTextBox: '//input[contains(@placeholder, "Enter Group description here")]',
    addSuccessfulMessage: '//div[contains(text(), "Group has been created successfully.")]',
    groupDescriptionMessage: '//p[contains(text(), "Description cannot exceed 150 characters.")]',
    addButton: '//div/div/div/h2[contains(text(), "Add New Group")]/following-sibling::p/button[contains(text(), "ADD")]]',
    groupNameMessage: '//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]',
    groupMenu: '//div[contains(text(), "1 Test")]//following-sibling::div[2]',
    assignMembersTextBox: '//div[contains(text(), "1 Test")]//following-sibling::div[2]//ul/li/p/div/span[contains(text(), "Assign Members")]',
    userLabel: '//p[contains(text(), "Select to add group members")]//following-sibling::div//p[contains(text(), "User")]',
    emailLabel: '//p[contains(text(), "Select to add group members")]//following-sibling::div//p[contains(text(), "Email")]',
    tickUser: '//p[contains(text(), "cuongktran+1@kobiton.com")]//ancestor::div[1]',
    updateButton: '//button[contains(text(), "UPDATE")]',
    updateSuccessfulMessage: '//div[contains(text(), "Group members have been updated successfully.")]',
    editGroupTitle: '//h2[contains(text(), "Edit Group")]',
    groupNameMessage: '//p[contains(text(), "Name must between 5 and 80 characters & can contain alphabet, alphanumeric, space, . + - _")]',
    updateButton: '//button[contains(text(), "UPDATE")]',
    updateSuccessfulMessage: '//div[contains(text(), "Group has been updated successfully.")],',
    androidText: '//p[contains(text(), "Device")]//following-sibling::div/p[contains(text(), "Android")]',
    iOSText: '//p[contains(text(), "Device")]//following-sibling::div/p[contains(text(), "iOS")]',
    nameDeviceCheckBox: '//h2[contains(text(), "List of Devices")]//following-sibling::ul[2]/li[1]/div[1]',
    updateDeviceButton: '//button[contains(text(), "Update")]',
    updateDeviceSuccessfulMessage: '//div[contains(text(), "Group devices have been updated successfully.")]',
    confirmationRemoveMessage: '//div[contains(text(), "All members and devices in a group will be unassigned and all sessions within the group will be transferred to the Organization Owner.")]',
    removeButton: '//button[contains(text(), "REMOVE")]',
    removeSuccessfulMessage: '//div[contains(text(), "Group has been removed successfully.")]'
}

describe('Verifying on org management page', () => {
    it('should login Kobiton page', () =>  {
        browser.url('https://portal-test.kobiton.com/login')
        const title = browser.getTitle()
        browser.pause(3000)
        expect(browser).toHaveTitle('Kobiton');
    })

    it('should login in portal-test successfully', async () => {
        const emailTextBox = await $(elements.emailTextBox)
        await emailTextBox.click()
        await emailTextBox.keys('khanhdo')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.click()
        await passwordTextBox.keys('')
        await browser.pause(3000)
        await browser.keys("\uE007");
        await browser.pause(8000) 
    })

    it('should click to org management navigave to group function', async () => {
        await browser.pause(8000)
        const orgManagementPage = await $(elements.orgManagementPage)
        await browser.pause(5000)
        await orgManagementPage.click()
        await browser.pause(8000)
    })

    it('should display Group, Description, User, Device, + ADD in group function', async () => {
        const groupText = await $(elements.groupText)
        await expect(groupText).toBeVisible()
        await browser.pause(3000)

        const descriptionText = await $(elements.descriptionText)
        await expect(descriptionText).toBeVisible()
        await browser.pause(3000)

        const userText = await $(elements.userText)
        await expect(userText).toBeVisible()
        await browser.pause(3000)

        const deviceText = await $(elements.deviceText)
        await expect(deviceText).toBeVisible()
        await browser.pause(3000)

        const addButtonText = await $(elements.plusAddButton)
        await expect(addButtonText).toBeVisible()
        await browser.pause(3000)
    })

    describe('Verifying on edit organization', async () => {
        it('should display Edit Organization popup when clicking edit org edit icon', () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)

            const editOrganizationText = await $(elements.editOrganizationText)
            await expect(editOrganizationText).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit successful Organization Name with = 5 characters ', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)
    
            const organizationNameTextBox = await $(elements.organizationDescriptionTextBox)
            await organizationNameTextBox.clearValue()
            await organizationNameTextBox.click()
            await browser.keys('12345')
            await browser.pause(3000)
    
            const updateButton = await $(elements.updateButton)
            await expect(updateButton).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit unsuccessful Organization Name with < 5 characters', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)
    
            const organizationNameTextBox = await $(elements.organizationNameTextBox)
            await organizationNameTextBox.clearValue()
            await organizationNameTextBox.click()
            await browser.keys('1234')
            await browser.pause(3000)
    
            const compulsoryMessage = await $(elements.compulsoryMessage)
            await expect(compulsoryMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit successful Organization Name with > 5 characters', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)
    
            const organizationNameTextBox = await $(elements.organizationNameTextBox)
            await organizationNameTextBox.clearValue()
            await organizationNameTextBox.click()
            await browser.keys('123456')
            await browser.pause(3000)
    
            const updateButton = await $(elements.updateButton)
            await expect(updateButton).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit unsuccessful Organization Name with > 80 characters', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)
    
            const organizationNameTextBox = await $(elements.organizationNameTextBox)
            await organizationNameTextBox.click()
            await browser.keys('123456789hdfvsjahvjsbvajhvsabdhfsjfhvashvfkshdfjashdfgkdhfsjdhbcjhsdvgfgkuhagvhsdbcjsvbadkfhvabkdhvbsdcvbdkavjhbdsvbsdjhvsadvhsaj')
            await browser.pause(3000)
    
            const organizationDescriptionTextBox = await $(elements.organizationDescriptionTextBox)
            await organizationDescriptionTextBox.click()
            // browser.keys('')
    
            const compulsoryMessage = await $(elements.compulsoryMessage)
            await expect(compulsoryMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit unsuccessful Organization Name with the blank field', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)
    
            const organizationNameTextBox = await $(elements.organizationNameTextBox)
            await organizationNameTextBox.clearValue()
            await browser.pause(30000)
            await organizationNameTextBox.getValue()
            // organizationNameTextBox.click()
            await browser.pause(3000)
    
            const orgDescriptionTextBox = await $(elements.orgDescriptionTextBox)
            await orgDescriptionTextBox.click()
            await browser.pause(3000)
    
            const compulsoryMessage = await $(elements.compulsoryMessage)
            await expect(compulsoryMessage).toBeVisible()
            browser.pause(3000)
        })
    
        it('should verify that not be able to edit organization with description cannot exceed 150 characters', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)
    
            const organizationNameTextBox = await $(elements.organizationNameTextBox)
            await organizationNameTextBox.click()
            await browser.keys('1234556')
            await browser.pause(30000)
    
            const organizationDescriptionTextBox = await $(elements.organizationDescriptionTextBox)
            await organizationDescriptionTextBox.click()
            await browser.keys('123123123dhgfsjvhjbh shfu sdhj hdshf ksh kjas kjv ssdjk jsdh fhfksdhf kjs fhsd  h sfhsfsavvgh vfgfjsgfkvbncxvnmzvbzbvnvbkdfgaerytdfbdkfhkasdgfiuyetuyertyehafhjsfgjsgdjgdfjghf')
            await browser.pause(3000)
    
            const orgDescriptionMessage = await $(elements.orgDescriptionMessage)
            await expect(orgDescriptionMessage).toBeVisible()
            await browser.pause(3000)
            
        })
    
        it('should verify that be able to update Edit Organization with valid Organization Name and Organization Description', async () => {
            const organizationNameTextBox = await $(elements.organizationNameTextBox)
            await organizationNameTextBox.click()
            await browser.keys('')
            await browser.pause(3000)
    
            const organizationDescriptionTextBox = await $(organizationDescriptionTextBox)
            await organizationDescriptionTextBox.clearValue()
            await organizationDescriptionTextBox.click()
            await browser.keys('Kobiton Test')
             awaitbrowser.pause(3000)
    
            const updateButton = await $(elements.updateButton)
            await updateButton.click()
            await browser.pause(3000)
        })
    
        it('should display the tooltip when hovering to org Edit icon', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.moveTo(1,1)
            await browser.pause(6000)
    
            const editTextHover = await $(elements.editTextHover)
            await expect(editTextHover).toBeVisible()
            await browser.pause(3000)
        })
    })

    describe('Verifying on group menu of group', () => {
        it('should display the group menu when clicking the row of table', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000)
        })
    
        it('should display the Assign Members popup (Add Users to 1 Test) when clicking Assign Members', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await expect(assignMembersTextBox).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should display User and Email in  Assign Members popup when clicking to Assign Members feature', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const userLabel = await $(elements.userLabel)
            await expect(userLabel).toBeVisible()
            const emailLabel = await $(elements.emailLabel)
            await expect(emailLabel).toBeVisible()
            await browser.pause(3000)
    
        })
    
        it('should assign members successfully when clicking to update', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const tickUser = await $(elements.tickUser)
            await tickUser.click()
            await browser.pause(3000)
    
            const updateButton = await $(elements.updateButton)
            await updateButton.click()
            await browser.pause(3000)
    
            const updateSuccessfulMessage = await $(elements.updateSuccessfulMessage)
            await expect(updateSuccessfulMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should display the Edit popup when clicking Edit', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const editGroupTitle = await $(elements.editGroupTitle)
            await expect(editGroupTitle).toBeVisible()
            await browser.pause(3000)
        })
    
        it('verify that not be able to edit group with description cannot exceed 150 characters', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const groupNameTextBox = await $(elements.groupNameTextBox)
            await groupNameTextBox.click()
            await browser.keys('Nobita')
            await browser.pause(3000)
    
            const groupDescriptionTextBox = await $(elements.groupDescriptionTextBox)
            await groupDescriptionTextBox.click()
            await browser.keys('123123123dhgfsjvhjbh shfu sdhj hdshf ksh kjas kjv ssdjk jsdh fhfksdhf kjs fhsd  h sfhsfsavvgh vfgfjsgfkvbncxvnmzvbzbvnvbkdfgaerytdfbdkfhkasdgfiuyetuyertyehafhjsfgjsgdjgdfjghf')
            await browser.pause(3000)
    
            const groupDescriptionMessage = await $(groupDescriptionMessage)
            await expect(groupDescriptionMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit group successful Group Name with = 5 characters', async () => {
            await browser.pause(3000)
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const groupNameTextBox = await $(elements.groupNameTextBox)
            await groupNameTextBox.click()
            await browser.keys('Nobita')
            await browser.pause(3000)
    
            const groupDescriptionTextBox = await $(elements.groupDescriptionTextBox)
            await groupDescriptionTextBox.click()
            await browser.pause(3000)
    
            const updateButton = await $(elements.updateButton)
            await expect(updateButton).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit group successful Group Name with > 5 characters', async () => {
            await browser.pause(3000)
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const groupNameTextBox = await $(elements.groupNameTextBox)
            await groupNameTextBox.click()
            await browser.keys('Nobitahaha')
            await browser.pause(3000)
    
            const groupDescriptionTextBox = await $(elements.groupDescriptionTextBox)
            await groupDescriptionTextBox.click()
            await browser.pause(3000)
    
            const updateButton = await $(elements.updateButton)
            await expect(updateButton).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit group unsuccessful Group Name with < 5 characters', async () => {
            await browser.pause(3000)
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const groupNameTextBox = await $(elements.groupNameTextBox)
            await groupNameTextBox.click()
            await groupNameTextBox.clearValue()
            await groupNameTextBox.click()
            await browser.keys('Hahi')
            await browser.pause(3000)
    
            const groupDescriptionTextBox = await $(elements.groupDescriptionTextBox)
            await groupDescriptionTextBox.click()
            await browser.pause(3000)
    
            const groupNameMessage = await $(elements.groupNameMessage)
            await expect(groupNameMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit group unsuccessful Group Name with > 80 characters', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const groupNameTextBox = await $(elements.groupNameTextBox)
            await groupNameTextBox.click()
            await browser.keys('hfaghfagfasfgsafgfgjfgasfasfggjkagjasgajfgajfgsfguyrgefhvhdbvxnvxnvhfvffgffgjhdvcvnvhdvxvjhsdgfsfgsfhdvxbvhdgvdgfsgfhdvhdjvshdjvd')
            await browser.pause(3000)
    
            const groupDescriptionTextBox = await $(elements.groupDescriptionTextBox)
            await groupDescriptionTextBox.click()
            await browser.pause(3000)
    
            const compulsoryMessage = await $(elements.compulsoryMessage)
            await expect(compulsoryMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify edit group successfully with valid group name and group description', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const groupNameTextBox = await $(elements.groupNameTextBox)
            await groupNameTextBox.click()
            await browser.keys('Nobita')
            await browser.pause(3000)
    
            const groupDescriptionTextBox = await $(elements.groupDescriptionTextBox)
            await groupDescriptionTextBox.click()
            await browser.keys('Nobita love Shizuka')
            await browser.pause(3000)
    
            const updateButton = await $(elements.updateButton)
            await updateButton.click()
            await browser.pause(3000)
    
            const updateSuccessfulMessage = await $(elements.updateSuccessfulMessage)
            await expect(updateSuccessfulMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify display the assign devices popup', async () => {
            await browser.pause(3000)
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const androidText = await $(elements.androidText)
            await expect(androidText).toBeVisible()
            await browser.pause(3000)
    
            const iOSText = await $(elements.iOSText)
            await expect(iOSText).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify update the assign devices successfully', async () => {
            await browser.pause(3000)
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            // iPhone 6 Plus: //h2[contains(text(), "List of Devices")]/following-sibling::ul[2]/li[2]/div/div//preceding::div[contains(text(), "iPhone 6 Plus")]//preceding::div[1]
            const nameDeviceCheckBox = await $(elements.nameDeviceCheckBox)
            //const nameDeviceCheckBox = $('//h2[contains(text(), "List of Devices")]/following-sibling::ul[2]/li[2]/div/div//preceding::div[contains(text(), "iPhone 6 Plus")]//preceding::div[1]')
            await nameDeviceCheckBox.scrollIntoView()
            await nameDeviceCheckBox.click()
            await browser.pause(3000)
    
            const updateDeviceButton = await $(elements.updateDeviceButton)
            await updateDeviceButton.click()
            await browser.pause(3000)
    
            const updateDeviceSuccessfulMessage = await $(elements.updateDeviceSuccessfulMessage)
            await expect(updateDeviceSuccessfulMessage).toBeVisible()
            await browser.pause(3000)
    
        })
    
        it('should verify display the remove confirmation popup', async () => {
            await browser.pause(3000)
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const confirmationRemoveMessage = await $(confirmationRemoveMessage)
            await expect(confirmationRemoveMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should verify remove group successfully', async () => {
            await browser.pause(3000)
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.scrollIntoView()
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const removeButton = await $(elements.removeButton)
            await removeButton.click()
            await browser.pause(3000)
    
            const removeSuccessfulMessage = await $(elements.removeSuccessfulMessage)
            await expect(removeSuccessfulMessage).toBeVisible()
            await browser.pause(3000)
        })
    })
})







