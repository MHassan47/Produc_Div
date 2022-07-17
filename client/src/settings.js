import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react"


const appId = "c3accc8c4273406c80f00850cb0706ae"
// every day create a new temp token
const token = "006c3accc8c4273406c80f00850cb0706aeIABiBxit4kXsA8bc+cnriuG93ws2ga2xp8qQblLMY4PozRgwSN4AAAAAEACPl0pWDonUYgEAAQAOidRi"

// rtc - real-time communication
export const config = {mode: "rtc", codec: "vp8", appId, token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "Conference";