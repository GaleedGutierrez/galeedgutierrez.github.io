import { onCLS, onFID, onLCP } from "web-vitals";

// Google Analytics
window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "G-M8H4YB694S");

// Web Vitals
function sendToGoogleAnalytics({ name, delta, id }) {
	gtag("event", name, {
		event_category: "Web Vitals",
		event_label: id,
		value: Math.round(name === "CLS" ? delta * 1000 : delta),
		non_interaction: true,
	});
}

onCLS(sendToGoogleAnalytics);
onFID(sendToGoogleAnalytics);
onLCP(sendToGoogleAnalytics);
