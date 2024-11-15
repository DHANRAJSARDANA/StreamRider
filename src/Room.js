import * as React from 'react';

import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

// get token
function generateToken(tokenServerUrl, appID, userID) {
  // Obtain the token interface provided by the App Server
  return fetch(tokenServerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      app_id: appID,
      user_id: userID,
    }),
  }).then(async (res) => {
    const result = await res.text();
    return result;
  });
}

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
): URLSearchParams {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}
function Room() {
 const {roomId}=useParams();
//  const {userName}=useParams();
 const userID = randomID(5);
  const userName = randomID(5);
  let role_str = getUrlParams(window.location.href).get('role') || 'Host';
  const role =
    role_str === 'Host'
      ? ZegoUIKitPrebuilt.Host
      : role_str === 'Cohost'
      ? ZegoUIKitPrebuilt.Cohost
      : ZegoUIKitPrebuilt.Audience;

  let sharedLinks = [];
  if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
    sharedLinks.push({
      name: 'Join as co-host',
      url:
        window.location.origin +
        window.location.pathname +
        '?roomID=' +
        roomId +
        '&role=Cohost',
    });
  }
  sharedLinks.push({
    name: 'Join as audience',
    url:
      window.location.origin +
      window.location.pathname +
      '?roomID=' +
      roomId +
      '&role=Audience',
  });
 let myMeeting=async (element) => {
    generateToken(
        'https://preview-uikit-server.zegotech.cn/api/token',
        2013980891,
        userID
      ).then((res) => {
        const token = ZegoUIKitPrebuilt.generateKitTokenForProduction(
          2013980891,
          res,
          roomId,
          userID,
          userName
        );
        // create instance object from token
        const zp = ZegoUIKitPrebuilt.create(token);
        // start the call
        zp.joinRoom({
          container: element,
          scenario: {
            mode: ZegoUIKitPrebuilt.LiveStreaming,
            config: {
              role,
            },
          },
          sharedLinks,
        });
      });
    };
    return (
        <div
        className="myCallContainer"
        ref={myMeeting}
        style={{ width: '100vw', height: '100vh' }}
      ></div>
  )
}

export default Room
