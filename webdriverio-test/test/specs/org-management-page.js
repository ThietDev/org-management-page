const elements = {
    emailTextBox: '[name="emailOrUsername"]',
    passwordTextBox: '[name="password"]',
    orgManagementPage: '//a[contains(@href, "/organization/groups")]',
    groupText: '//p[contains(text(), "Group")]',
    descriptionText: '//p[contains(text(), "Description")]',
    userText: '//p[contains(text(), "User")]',
    deviceText: '//p[contains(text(), "Device")]',
    addButton: '//button[contains(text(), "+ ADD")]',
    orgEditIcon: '//div/div/div/h1[contains(text(), "Kobiton")]/following-sibling::span',
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
    userTitle: '//p[contains(text(), "Select to add group members")]//following-sibling::div//p[contains(text(), "User")]',
    emailTitle: '//p[contains(text(), "Select to add group members")]//following-sibling::div//p[contains(text(), "Email")]',
    tickUser: '//p[contains(text(), "Select to add group members")]/following::div[1]/div/div/div[2]',
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
    removeSuccessfulMessage: '//div[contains(text(), "Group has been removed successfully.")]',
    userOfMemberText: '//div/span[1]/div[contains(text(), "User")]',
    emailOfMemberText: '//div/span[2]/div[contains(text(), "Email")]',
    roleOfMemberText: '//div/span[3]/div[contains(text(), "Role")]',
    statusOfMemberText: '//div/span[4]/div[1][contains(text(), "Status")]',
    addMemberButtonText: '//div/span[4]/button[contains(text(), "+ ADD")]',
    membersPage: '//ul/a[2]/li[contains(text(), "Members")]',
    addMembersButton: '//div/span[4]/button[contains(text(), "+ ADD")]',
    headerOfAddMembers: '//h2[contains(text(), "Invite User to") or contains(text(), "Kobiton Org")]',
    emailAddressTextBox: '//input[@placeholder="Separate emails by semicolon (;), space or enter"]',
    roleForUserDropdown: '//div/p[contains(text(), "Role")]/following-sibling::div/div[1]',
    listOfRole: '//ul/li[2]/p[2][contains(text(), "Can see devices and sessions for which access has been granted.")]',
    inviteButton: '//div/button[contains(text(), "INVITE")]',
    invitationSuccessfulMessage: '//div[contains(text(), "Successfully add member(s) to the organization")]',
    addToGroupDropdown: '//div/div/div/p[contains(text(), "None")]',
    listOfGroup: '//ul/li/p[contains(text(), "None")]',
    removeUserIcon: '//div/span[2][contains(text(), "thiethuynh+1@kobiton.com")]/following-sibling::div/*[name()="svg"]',
    searchUserTextBox: '//input[contains(@placeholder, "Search User by name or email")]',
    checkNameSearch: '//div/span/span[contains(text(), "Phuong Le")]',
    checkEmailSearch: '//div/span/span/following::span[contains(text(), "phuongdle@kobiton.com")]',
    changeRole: '//div/span/span[contains(text(), "Nguyen Hien")]/following::span[2]',
    adminDropdown: '(//span[contains(text(), "Nguyen Hien")]/following::ul/li/p[contains(text(), "Admin")])[1]',
    memberMenu: '//span[contains(text(), "Nguyen Hien")]/following::div[4]/*[name()="svg"]',
    deactivateUser: '//span[contains(text(), "Nguyen Hien")]/following::div[4]/*[name()="svg"]/following::ul[1]/li[1]/p/div/span[2]',
    deactivateUserTextConfirmation: '//p[contains(text(), "The deactivated user will be unassigned from all groups and no longer can access to the system. Are you sure you want to deactivate?")]',
    deactivateButton: '//div/button[contains(text(), "Deactivate")]',
    deactivateSuccessfulMessage: '//div[contains(text(), "The user has been deactivated successfully.")]',
    activateUser: '//span[contains(text(), "Nguyen Hien")]/following::div[4]/*[name()="svg"]/following::ul[1]/li[1]/p/div/span[2]',
    activateUserTextConfirmation: '//p[contains(text(), "The user will be treated as a new invitee to the organization. Are you sure you want to activate?")]',
    activateButton: '//div/button[contains(text(), "Activate")]',
    activateSuccessfulMessage: '//div[contains(text(), "The user has been activated successfully.")]',
    transferUser: '//span[contains(text(), "Nguyen Hien")]/following::div[4]/*[name()="svg"]/following::ul[1]/li[3]/p/div/span[2]',
    transferTitle: '//h2[contains(text(), "Transfer member to other organization")]', 
    organizationOwnersEmailTextBox: '//input[contains(@placeholder, "organization_owner@example.com")]', 
    validateButton: '//div/button[contains(text(), "Validate")]',
    invalidOrganizationOwnersEmailText: '//div/div/div/label/following-sibling::div[contains(text(), "This is not a valid organization")]',
    removeUser: '//span[contains(text(), "Nguyen Hien")]/following::div[4]/*[name()="svg"]/following::ul[1]/li[2]/p/div/span[2]',
    removeUserTextConfirmation: '//p[contains(text(), "The member will be removed from the system and all associated data will be moved to the Organization Owner.")]',
    removeUserButton: '//div/button[contains(text(), "Remove")]',
}

describe('Verifying on org management page', async () => {
    describe('Verifying on group page', async () => {
    before(() => {
        browser.url('https://portal-test.kobiton.com/login')
        const title = browser.getTitle()
        browser.pause(3000)
        expect(browser).toHaveTitle('Kobiton');
    })

    it.only('should login in portal-test successfully', async () => {
        const emailTextBox = await $(elements.emailTextBox)
        await emailTextBox.click()
        await emailTextBox.keys('khanhdo')
        browser.pause(3000)

        const passwordTextBox = await $(elements.passwordTextBox)
        await passwordTextBox.click()
        await passwordTextBox.keys('Kobiton@2020')
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

        const addButton = await $(elements.plusAddButton)
        await expect(addButton).toBeVisible()
        await browser.pause(3000)
    })
    })

    describe('Verifying on edit organization', async () => {
        it('should display Edit Organization popup when clicking edit org edit icon', async () => {
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
    
        it.only('should verify edit unsuccessful Organization Name with > 80 characters', async () => {
            const orgEditIcon = await $(elements.orgEditIcon)
            await orgEditIcon.click()
            await browser.pause(5000)
    
            const randomstring = require("randomstring")
            const organizationNameTextBox = await $(elements.organizationNameTextBox)
            await organizationNameTextBox.click()
            await browser.keys(randomstring.generate(82))
            await browser.pause(3000)
    
            const organizationDescriptionTextBox = await $(elements.organizationDescriptionTextBox)
            await organizationDescriptionTextBox.click()
    
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
    
            const randomstring = require("randomstring")
            const organizationDescriptionTextBox = await $(elements.organizationDescriptionTextBox)
            await organizationDescriptionTextBox.click()
            await browser.keys(randomstring.generate(82))
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
            await browser.pause(3000)
    
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
    
        it('should display User and Email in Assign Members popup when clicking to Assign Members feature', async () => {
            const groupMenu = await $(elements.groupMenu)
            await groupMenu.click()
            await browser.pause(6000) 
    
            const assignMembersTextBox = await $(elements.assignMembersTextBox)
            await assignMembersTextBox.click()
            await browser.pause(3000)
    
            const userTitle = await $(elements.userTitle)
            await expect(userTitle).toBeVisible()
            const emailTitle = await $(elements.emailTitle)
            await expect(emailTitle).toBeVisible()
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
    
            const randomstring = require("randomstring")
            const groupDescriptionTextBox = await $(elements.groupDescriptionTextBox)
            await groupDescriptionTextBox.click()
            await browser.keys(randomstring.generate(82))
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
            const uuid = uuid.randomUUID().toString()
            await groupNameTextBox.keys(uuid)
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
    
            const nameDeviceCheckBox = await $(elements.nameDeviceCheckBox)
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

    describe('Verify on member feature', () => {
        it('should click to org management navigate to members function', async () => {
            await browser.pause(8000)
            const orgManagementPage = await $(elements.orgManagementPage)
            await browser.pause(5000)
            await orgManagementPage.click()
            await browser.pause(8000)
            const membersPage = await $(elements.membersPage)
            await membersPage.click()
            await browser.pause(5000)
        })
    
        it('should display User, Email, Role, Status, + ADD in members function', async () => {
            const userOfMemberText = await $(elements.userOfMemberText)
            await expect(userOfMemberText).toBeVisible()
            await browser.pause(3000)
    
            const emailOfMemberText = await $(elements.emailOfMemberText)
            await expect(emailOfMemberText).toBeVisible()
            await browser.pause(3000)
    
            const roleOfMemberText = await $(elements.roleOfMemberText)
            await expect(roleOfMemberText).toBeVisible()
            await browser.pause(3000)
    
            const statusOfMemberText = await $(elements.statusOfMemberText)
            await expect(statusOfMemberText).toBeVisible()
            await browser.pause(3000)
    
            const addMemberButtonText = await $(elements.addMemberButtonText)
            await expect(addMemberButtonText).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should display add new members popup when clicking +ADD button', async () => {
            const addMembersButton = await $(elements.addMembersButton)
            await addMembersButton.click()
            await browser.pause(3000)
    
            const headerOfAddMembers = await $(elements.headerOfAddMembers)
            await expect(headerOfAddMembers).toBeVisible()
            await browser.pause(5000)
        })
    
        it('should invite user to kobiton org successfully', async () => {
            const addMembersButton = await $(elements.addMembersButton)
            await addMembersButton.click()
            await browser.pause(3000)
    
            const emailAddressTextBox = await $(elements.emailAddressTextBox)
            await emailAddressTextBox.click()
            await emailAddressTextBox.keys('thiethuynh+1@kobiton.com')
            await browser.pause(3000)
    
            const roleForUserDropdown = await $(elements.roleForUserDropdown)
            await roleForUserDropdown.click()
            await browser.pause(3000)
    
            const listOfRole = await $(elements.listOfRole)
            await listOfRole.click()
            await browser.pause(3000)
    
            const addToGroupDropdown = await $(elements.addToGroupDropdown)
            await addToGroupDropdown.click()
            await browser.pause()
    
            const listOfGroup = await $(elements.listOfGroup)
            await listOfGroup.click()
            await browser.pause(3000)
    
            const inviteButton = await $(elements.inviteButton)
            await inviteButton.click()
            await browser.pause(3000)
    
            const invitationSuccessfulMessage = await $(elements.invitationSuccessfulMessage)
            await expect(invitationSuccessfulMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('invite user to group unsucessfully with wrong email format', async () => {
            const addMembersButton = await $(elements.addMembersButton)
            await addMembersButton.click()
            await browser.pause(3000)
    
            const emailAddressTextBox = await $(elements.emailAddressTextBox)
            await emailAddressTextBox.click()
            await emailAddressTextBox.keys('thiethuynh')
            await browser.pause(3000)
    
            const inviteButton = await $(elements.inviteButton)
            //await inviteButton.isDisplayed()
            await browser.pause(3000)
        })
    
        it('should remove user successfully', async () => {
            const removeUserIcon = await $(elements.removeUserIcon)
            await removeUserIcon.click()
            await browser.pause(3000)
        })
    
        it('should search User by name successfully', async () => {
            const searchUserTextBox = await $(elements.searchUserTextBox)
            await searchUserTextBox.click()
            await searchUserTextBox.keys('Phuong Le')
            await browser.pause(3000)
    
            const checkNameSearch = await $(elements.checkNameSearch)
            await expect(checkNameSearch).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should search User by email successfully', async () => {
            const searchUserTextBox = await $(elements.searchUserTextBox)
            await searchUserTextBox.click()
            await searchUserTextBox.keys('phuongdle@kobiton.com')
            await browser.pause(3000)
    
            const checkEmailSearch = await $(elements.checkEmailSearch)
            await expect(checkEmailSearch).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should set role successfully', async () => {
            const changeRole = await $(elements.changeRole)
            await changeRole.scrollIntoView()
            await changeRole.click()
            await browser.pause(6000)
    
            const adminDropdown = await $(elements.adminDropdown)
            await adminDropdown.click()
            await browser.pause(5000)
        })
    
        it('should show deactivate user popup', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const deactivateUser = await $(elements.deactivateUser)
            await deactivateUser.click()
            await browser.pause(4000)
    
            const deactivateUserTextConfirmation = await $(elements.deactivateUserTextConfirmation)
            await expect(deactivateUserTextConfirmation).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should deactivate the user successfully', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const deactivateUser = await $(elements.deactivateUser)
            await deactivateUser.click()
            await browser.pause(3000)
    
            const deactivateButton = await $(elements.deactivateButton)
            await deactivateButton.click()
            await browser.pause(3000)
    
            const deactivateSuccessfulMessage = await $(elements.deactivateSuccessfulMessage)
            await expect(deactivateSuccessfulMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should show activate user popup', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const activateUser = await $(elements.activateUser)
            await activateUser.click()
            await browser.pause(3000)
    
            const activateUserTextConfirmation = await $(elements.activateUserTextConfirmation)
            await expect(activateUserTextConfirmation).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should activate the user successfully', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const activateUser = await $(elements.activateUser)
            await activateUser.click()
            await browser.pause(3000)
    
            const activateButton = await $(elements.activateButton)
            await activateButton.click()
            await browser.pause(3000)
    
            const activateSuccessfulMessage = await $(elements.activateSuccessfulMessage)
            await expect(activateSuccessfulMessage).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should show the transfer popup', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const transferUser = await $(elements.transferUser)
            await transferUser.click()
            await browser.pause(3000)
    
            const transferTitle = await $(elements.transferTitle)
            await expect(transferTitle).toBeVisible()
            await browser.pause(3000)
        })
    
        it('cannot validate with wrong organization owner"s email.', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const transferUser = await $(elements.transferUser)
            await transferUser.click()
            await browser.pause(3000)
    
            const organizationOwnersEmailTextBox = await $(elements.organizationOwnersEmailTextBox)
            await organizationOwnersEmailTextBox.click()
            await organizationOwnersEmailTextBox.keys('thiethuynh@kobiton.com')
            await browser.pause(3000)
    
            const validateButton = await $(elements.validateButton)
            await validateButton.click()
            await browser.pause(3000)
    
            const invalidOrganizationOwnersEmailText = await $(elements.invalidOrganizationOwnersEmailText)
            await expect(invalidOrganizationOwnersEmailText).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should show the remove user popup', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const removeUser = await $(elements.removeUser)
            await removeUser.click()
            await browser.pause(3000)
    
            const removeUserTextConfirmation = await $(elements.removeUserTextConfirmation)
            await expect(removeUserTextConfirmation).toBeVisible()
            await browser.pause(3000)
        })
    
        it('should remove user in member successfully', async () => {
            const memberMenu = await $(elements.memberMenu)
            await memberMenu.scrollIntoView()
            await memberMenu.click()
            await browser.pause(3000)
    
            const removeUser = await $(elements.removeUser)
            await removeUser.click()
            await browser.pause(3000)
    
            const removeUserButton = await $(elements.removeUserButton)
            await removeUserButton.click()
            await browser.pause(3000)
        })
    })
})