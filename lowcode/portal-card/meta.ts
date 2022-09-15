
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const PortalCardMeta: ComponentMetadata = {
  "componentName": "PortalCard",
  "title": "PortalCard",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "@ablula/portal-components",
    "version": "0.1.2",
    "exportName": "PortalCard",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "title",
            "zh-CN": "title"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "MixedSetter",
          "isRequired": false,
          "props": {}
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "description",
            "zh-CN": "description"
          }
        },
        "name": "description",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "backgroundImage",
            "zh-CN": "backgroundImage"
          }
        },
        "name": "backgroundImage",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "href",
            "zh-CN": "href"
          }
        },
        "name": "href",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "PortalCard",
    "screenshot": "",
    "schema": {
      "componentName": "PortalCard",
      "props": {}
    }
  }
];

export default {
  ...PortalCardMeta,
  snippets
};
