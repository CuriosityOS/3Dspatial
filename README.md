# 3D Spatial Audio Experience

This Node.js web application demonstrates 3D spatial audio using the Web Audio API. Users can drag a small circle around a larger circle to position a sound source in 3D space, creating an immersive audio experience when wearing headphones. Designed with accessibility in mind, this tool can assist blind users with spatial navigation.

## Features

- Interactive circular interface representing a 3-meter diameter space
- Drag-and-drop interface to position sound in 3D space
- Realistic spatial audio using HRTF (Head-Related Transfer Function)
- Rapid pinging mode (every 0.3 seconds) for continuous feedback
- Enhanced volume and distance perception
- Works best with headphones or AirPods
- Sound position information display (angle, distance)
- Keyboard navigation and screen reader support
- Node.js server running on port 3000

## Installation

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd 3d-audio-website
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Start the server**
   ```
   npm start
   ```

4. **Open in browser**
   - Navigate to `http://localhost:3000` in your web browser

## Development Mode

To run the application in development mode with automatic server restarts:
```
npm run dev
```

## How to Use

1. **Wear headphones**
   - For the best experience, wear stereo headphones or AirPods
   - The spatial audio effect will be much more pronounced with headphones

2. **Interact with the interface**
   - Drag the small circle around the larger circle to position the sound
   - Use the "Play Sound" button to hear a ping from that position
   - Use the "Toggle Loop" button to continuously play the sound
   - Use the "Rapid Ping (0.3s)" button for quick navigation feedback
   - Adjust volume using the slider

3. **Position information**
   - The interface shows you the current position (Front, Right, Back, etc.)
   - It also displays the distance from center in meters
   - The angle in degrees is shown for precise positioning

4. **Keyboard accessibility**
   - Tab to the position marker and use arrow keys to move it
   - Space bar: Play/Stop sound
   - Enter: Toggle rapid pinging
   - All controls are fully keyboard accessible

## Accessibility Features

- Full keyboard navigation of the sound position marker
- ARIA labels on all interactive elements
- Live announcements of position changes for screen readers 
- High contrast visual design
- Control of playback rate for easier sound localization
- Volume control for adjusting audibility
- Rapid pinging mode (0.3s intervals) for continuous feedback

## Requirements

- Node.js (>= 14.x)
- npm or yarn
- Modern web browser with Web Audio API support (Chrome, Firefox, Safari, Edge)
- Headphones or AirPods for proper 3D audio perception
- JavaScript enabled

## Project Structure

```
3d-audio-website/
├── css/                # Stylesheets
│   └── styles.css      # Main CSS file
├── js/                 # JavaScript files
│   └── script.js       # Main client-side JS
├── server/             # Server files
│   └── server.js       # Express server configuration
├── sounds/             # Audio files
├── index.html          # Main HTML file
├── package.json        # Project dependencies and scripts
└── README.md           # This documentation
```

## Technical Details

- Uses the Web Audio API's PannerNode with HRTF for spatial audio
- Implements a 3-meter diameter virtual sound space (1.5m radius)
- Uses exponential distance model for better distance perception
- Increased rolloff factor (2.5) for more dramatic distance effect
- Higher frequency (1200Hz) ping for better sound localization
- Gain node with volume boost (3x) for louder, clearer audio
- Express.js server for serving static files

## Troubleshooting

- **No sound?** Most browsers require a user interaction before allowing audio playback. Click the "Play Sound" button after the page loads.
- **Can't hear spatial effects?** Make sure you're wearing headphones. Spatial audio effects are very subtle on speakers.
- **Performance issues?** The application should run smoothly on most devices, but close other tabs or applications if you experience lag.
- **Server not starting?** Check that the required port (3000) is not in use by another application.

## Future Improvements

- Support for loading custom sound files
- Multiple sound sources with different characteristics
- Advanced visualization options
- Elevation control (Z-axis positioning)
- Mobile optimization
- Voice commands for blind users

Enjoy your 3D audio experience!