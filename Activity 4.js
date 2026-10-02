class HotelReservation {
  #guestData;
  constructor(guestData) { this.#guestData = guestData; }
    getGuestName() { return this.#guestData?.fullName; }
    getRoomNumber() { return this.#guestData?.roomDetails?.roomNumber; }
}
const bookingGuest = new HotelReservation({ fullName: "Anna", roomDetails: { roomNumber: 101 } });
console.log("Item 18:", bookingGuest.getGuestName(), "Room:", bookingGuest.getRoomNumber());