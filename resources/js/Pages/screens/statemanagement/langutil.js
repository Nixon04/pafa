// import { defineStore } from 'pinia';

// export const useLangStore = defineStore('all_lang', () => {
  
//   async function translatePage(targetLang = 'fr') {
//     try {
//       localStorage.setItem('selectedLanguage', targetLang); // Save language preference

//       const elements = document.querySelectorAll('*:not(script):not(style)');

//       for (let el of elements) {
//         if (el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
//           let originalText = el.textContent.trim();
//           if (originalText) {
//             const translatedText = await fetchTranslation(originalText, targetLang);
//             el.textContent = translatedText;
//           }
//         }
//       }
//     } catch (error) {
//       console.error('Translation Error:', error);
//     }
//   }

//   async function fetchTranslation(text, targetLang) {
//     const apiKey = "YOUR_GOOGLE_API_KEY"; // Replace with your API Key
//     const url = `https://translation.googleapis.com/language/translate/v2?key=${apiKey}`;

//     const response = await fetch(url, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ q: text, target: targetLang })
//     });

//     const data = await response.json();
//     return data.data.translations[0].translatedText;
//   }

//   function loadSavedLanguage() {
//     const savedLang = localStorage.getItem('selectedLanguage') || 'en';
//     translatePage(savedLang);
//   }

//   return {
//     translatePage,
//     loadSavedLanguage,
//   };
// });
