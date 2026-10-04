class ClubMember {
  constructor(memberInfoObj) { this.memberInfoObj = memberInfoObj; }
  getMemberEmail() { return this.memberInfoObj?.contactInfo?.emailAddress; }
  getMemberCity() { return this.memberInfoObj?.addressInfo?.cityName; }
}
const memberOne = new ClubMember({ contactInfo: { emailAddress: "member1@mail.com" } });
const memberTwo = new ClubMember({ addressInfo: { cityName: "Cebu City" } });
const memberThree = new ClubMember({});
console.log( memberOne.getMemberEmail(), memberTwo.getMemberCity(), memberThree.getMemberEmail());