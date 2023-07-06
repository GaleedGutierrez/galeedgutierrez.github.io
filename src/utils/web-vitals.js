/* eslint-disable camelcase */
import { onCLS, onFID, onLCP } from "web-vitals";

function sendToGoogleAnalytics({ name, delta, id }) {
	window.gtag("event", name, {
		event_category: "Web Vitals",
		event_label: id,
		value: Math.round(name === "CLS" ? delta * 1000 : delta),
		non_interaction: true,
	});
}

onCLS(sendToGoogleAnalytics);
onFID(sendToGoogleAnalytics);
onLCP(sendToGoogleAnalytics);
