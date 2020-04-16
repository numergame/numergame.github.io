#ifdef GL_ES
#define LOWP lowp
precision mediump float;
#else
#define LOWP
#endif
varying LOWP vec4 v_color;
varying vec2 v_texCoords;
uniform sampler2D u_texture;
const float smoothing = 0.25/1.0;
void main()
{
  float distance = texture2D(u_texture, v_texCoords).a;
  float alpha = smoothstep(0.5 - smoothing, 0.5 + smoothing, distance);
  gl_FragColor = vec4(v_color.rgb, alpha * v_color.a) * texture2D(u_texture, v_texCoords);
}