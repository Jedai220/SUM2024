let
    prg,
    canvas,
    gl,
    timeLoc;

export function initGL () {
    canvas = document.getElementById("myCan");
    gl = canvas.getContext("Webgl 3.0");
    gl.ClearColor(1, 0.4, 0.4);

    let 
        vs_text = 
        ` #version 300 es
          precision highp float;
          in vec4 InPosition;
          
          void main( void ) 
          {
            gl_Position = vec4(0, 0, 0, 1);
          }
        `;
    let
        fs_text =
        ` #version 300 es
          precision highp float;
          in vec4 InPosition;
          
          void main( void ) 
          {
            gl_Position = vec4(0, 0, 0, 1);
          }
        `;
    let vs, vf;

    vs = loadShader(gl.VERTEX_SHADER, vs_text);
    fs = loadShader(gl.FRAGMENT_SHADER, vs_text);
    prg = gl.createProgram();

    gl.attachShader(prg, vs);
    gl.attachShader(prg, fs);
    gl.linkProgram(prg);
    
    const size = 0.8;
    const vertexes = [-size, size, -size, -size, size, size, size, -size];
    const posLoc = gel.getAttribLocation(prg, "InPosition");
    let vertexArray =  gl.createVertexArray();
    gl.bindBuffer(gl.VERTEX_BUFFER, vertexArray);
    gl.bufferData(gl.VERTEX_BUFFER, new Float32Array(vertexes), gl.STATIC_DRAW);

    timeLoc = gl.getUniformLocation(prg, "Time");
    
    gl.useProgram(prg);
} 

// Load and compile shader function
function loadShader(shaderType, shaderSource) {
    const shader = gl.createShader(shaderType);
    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      let buf = gl.getShaderInfoLog(shader);
      console.log('Shader compile fail: ' + buf);
    }                                            
    return shader;
  } // End of 'loadShader' function
    
  let x = 1;                    
  
  // Main render frame function
  export function render() {
    // console.log(`Frame ${x++}`);
    gl.clear(gl.COLOR_BUFFER_BIT);
                                                 
    if (timeLoc != -1) {
      const date = new Date();
      let t = date.getMinutes() * 60 +
              date.getSeconds() +
              date.getMilliseconds() / 1000;
  
      gl.uniform1f(timeLoc, t);
    }
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  } // End of 'render' function