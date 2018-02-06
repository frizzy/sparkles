### Sparkles

## Example data structure for the redux state

Hypothetical draft:

    {
      // The Sparkles user-defined component configurations
      "sparkles": {
        // The configured controls which should be displayed in the view
        "controls": [
          {
            // A user defined name
            "name": "Living Room Light",

            // The React component which should be employed
            "react-component": "SwitchButton",

            // The view which the component appears on (For later date)
            "view": "",

            // Position information of the component in the view
            "position": {
              "x": 10,
              "y": 10,
              "zIndex": 9999
            }

            // The properties which are required by the React Component to function
            "properties": {
              "switchOn": "/switches/livingRoomLight/on",
              "switchOff": "/switches/livingRoomLight/off"
            },

            // The MQTT configuration from where the state of the component is derived
            "state": "mqtt.livingRoomLight"
          },
        ],
      }

      // The MQTT subscriptions
      "mqtt": {
        "livingRoomLight": {
          // Which namespace from MQTT to retrieve the current state
          "subscribe": "/switches/livingRoomLight",

          // The returned state information from MQTT
          "state": {
            "current": "on"
          }
        }
      }
    }
