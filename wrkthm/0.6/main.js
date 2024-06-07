import {myAlert} from "./addons"; 

let gl, canvas; 

export function initGL () {
  canvas = document.querySelector("#myCan");
  gl = canvas.getContext("webgl2");
  gl.clearColor(1, 0, 1, 1);

  let vs_text = `#version 300 es
      pricision highp float;

      out vec2 DrawPos;
      in vec3 mP;

      void main( void )
      {
        gl_Position = vec4(mP, 1);
        DrawPos = mP.xy;
      }
     `,
      fs_text = `#version 300 es
      pricision highp float;

      out vec2 DrawPos;
      in vec3 mP;

      void main( void )
      {
        gl_Position = vec4(mP, 1);
        DrawPos = mP.xy;
      }
      `;

  let vs = loadShader(gl.VERTEX_SHADER, vs_text),
      fs = loadShader(gl.FRAGMENT_SHADER, vs_text),
      prg = createProgram();

  gl.attachShader(prg, vs);
  gl.attachShader(prg, fs);
  gl.linkProgram(prg);

  if (!gl.getPragramParameter(prg, gl.LINK_STATUS)) {
    alert("Link shader error!!! ");
  }

  const size = 1.0;
  const vertexes = [-size, size, 0, -size, -size, 0, size, -size, 0, size, size];
  const locPos = gl.getAtribLocation(prg, "mP");
  let vertexeArray = createVertexArray();
  gl.bindVertexArray(vertexeArray);
  let vertexBuffer = createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexes), gl.STATIC_DRAW);
  
  if (locPos != -1) {
    gl.vertexAttribPointer(locPos, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexArray(locPos);
  }

  document.body.style.backgroundColor = "red";

  gl.useProgram(prg);
}

function render () {

}

export function main () {
  initGL();
  render();
}