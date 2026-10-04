const userPrimaryDetails = { userNameText: "Tom", extraInfo: { userAge: 18 } };
const userRoleDetails = { userRoleText: "Member" };
const combinedUserDetails = { ...userPrimaryDetails, ...userRoleDetails };
console.log("Item 28:", combinedUserDetails.extraInfo?.userAge, combinedUserDetails.contactData?.phoneNumber);