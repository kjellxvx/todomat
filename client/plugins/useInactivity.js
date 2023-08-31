import { ref, watchEffect } from "vue";
import { useLocal, useTimeout} from "~/composables/useUtils";

export default function ({}) {
  const local = useLocal();
  const timeout = useTimeout();
  const lastActivity = ref(Date.now());
  const route = useRoute(); 

  // Update the last activity timestamp whenever there is user interaction
  const updateActivity = () => {
    lastActivity.value = Date.now();
  };

  // Redirect to the index site if no activity is detected for 10 seconds
  const checkInactivity = () => {
    const currentTime = Date.now();
    const inactivityDuration = currentTime - lastActivity.value;
    if (local.value == true && route.name !== 'index') {
      if (inactivityDuration >= 240000) {
        timeout.value=true
      }else{
        timeout.value=false
      }
    }
  };

  // Watch for user interaction and reset the activity timer
  watchEffect(() => {
    window.addEventListener("mousemove", updateActivity);
    window.addEventListener("keydown", updateActivity);
    window.addEventListener("touchstart", updateActivity);
    window.addEventListener("scroll", updateActivity);

    const inactivityInterval = setInterval(checkInactivity, 1000);

    return () => {
      window.removeEventListener("mousemove", updateActivity);
      window.removeEventListener("keydown", updateActivity);
      window.removeEventListener("touchstart", updateActivity);
      window.removeEventListener("scroll", updateActivity);
      clearInterval(inactivityInterval);
    };
  });
}
