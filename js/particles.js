var pJS = function (e, t) {
  var a = document.querySelector("#" + e + " > .particles-js-canvas-el");
  this.pJS = {
    canvas: { el: a, w: a.offsetWidth, h: a.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: "#fff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#ff0000" },
        polygon: { nb_sides: 5 },
        image: { src: "", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: !1,
        anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
      },
      size: {
        value: 20,
        random: !1,
        anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
      },
      line_linked: {
        enable: !0,
        distance: 100,
        color: "#fff",
        opacity: 1,
        width: 1,
      },
      move: {
        enable: !0,
        speed: 2,
        direction: "bottom",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: !1,
        attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
      },
      array: [],
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: !0, mode: "grab" },
        onclick: { enable: !0, mode: "push" },
        resize: !0,
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 1 } },
        bubble: { distance: 200, size: 80, duration: 0.4 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var m = this.pJS;
  t && Object.deepExtend(m, t),
    (m.tmp.obj = {
      size_value: m.particles.size.value,
      size_anim_speed: m.particles.size.anim.speed,
      move_speed: m.particles.move.speed,
      line_linked_distance: m.particles.line_linked.distance,
      line_linked_width: m.particles.line_linked.width,
      mode_grab_distance: m.interactivity.modes.grab.distance,
      mode_bubble_distance: m.interactivity.modes.bubble.distance,
      mode_bubble_size: m.interactivity.modes.bubble.size,
      mode_repulse_distance: m.interactivity.modes.repulse.distance,
    }),
    (m.fn.retinaInit = function () {
      m.retina_detect && 1 < window.devicePixelRatio
        ? ((m.canvas.pxratio = window.devicePixelRatio), (m.tmp.retina = !0))
        : ((m.canvas.pxratio = 1), (m.tmp.retina = !1)),
        (m.canvas.w = m.canvas.el.offsetWidth * m.canvas.pxratio),
        (m.canvas.h = m.canvas.el.offsetHeight * m.canvas.pxratio),
        (m.particles.size.value = m.tmp.obj.size_value * m.canvas.pxratio),
        (m.particles.size.anim.speed =
          m.tmp.obj.size_anim_speed * m.canvas.pxratio),
        (m.particles.move.speed = m.tmp.obj.move_speed * m.canvas.pxratio),
        (m.particles.line_linked.distance =
          m.tmp.obj.line_linked_distance * m.canvas.pxratio),
        (m.interactivity.modes.grab.distance =
          m.tmp.obj.mode_grab_distance * m.canvas.pxratio),
        (m.interactivity.modes.bubble.distance =
          m.tmp.obj.mode_bubble_distance * m.canvas.pxratio),
        (m.particles.line_linked.width =
          m.tmp.obj.line_linked_width * m.canvas.pxratio),
        (m.interactivity.modes.bubble.size =
          m.tmp.obj.mode_bubble_size * m.canvas.pxratio),
        (m.interactivity.modes.repulse.distance =
          m.tmp.obj.mode_repulse_distance * m.canvas.pxratio);
    }),
    (m.fn.canvasInit = function () {
      m.canvas.ctx = m.canvas.el.getContext("2d");
    }),
    (m.fn.canvasSize = function () {
      (m.canvas.el.width = m.canvas.w),
        (m.canvas.el.height = m.canvas.h),
        m &&
          m.interactivity.events.resize &&
          window.addEventListener("resize", function () {
            (m.canvas.w = m.canvas.el.offsetWidth),
              (m.canvas.h = m.canvas.el.offsetHeight),
              m.tmp.retina &&
                ((m.canvas.w *= m.canvas.pxratio),
                (m.canvas.h *= m.canvas.pxratio)),
              (m.canvas.el.width = m.canvas.w),
              (m.canvas.el.height = m.canvas.h),
              m.particles.move.enable ||
                (m.fn.particlesEmpty(),
                m.fn.particlesCreate(),
                m.fn.particlesDraw(),
                m.fn.vendors.densityAutoParticles()),
              m.fn.vendors.densityAutoParticles();
          });
    }),
    (m.fn.canvasPaint = function () {
      m.canvas.ctx.fillRect(0, 0, m.canvas.w, m.canvas.h);
    }),
    (m.fn.canvasClear = function () {
      m.canvas.ctx.clearRect(0, 0, m.canvas.w, m.canvas.h);
    }),
    (m.fn.particle = function (e, t, a) {
      if (
        ((this.radius =
          (m.particles.size.random ? Math.random() : 1) *
          m.particles.size.value),
        m.particles.size.anim.enable &&
          ((this.size_status = !1),
          (this.vs = m.particles.size.anim.speed / 100),
          m.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = a ? a.x : Math.random() * m.canvas.w),
        (this.y = a ? a.y : Math.random() * m.canvas.h),
        this.x > m.canvas.w - 2 * this.radius
          ? (this.x = this.x - this.radius)
          : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > m.canvas.h - 2 * this.radius
          ? (this.y = this.y - this.radius)
          : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        m.particles.move.bounce && m.fn.vendors.checkOverlap(this, a),
        (this.color = {}),
        "object" == typeof e.value)
      )
        if (e.value instanceof Array) {
          var i =
            e.value[Math.floor(Math.random() * m.particles.color.value.length)];
          this.color.rgb = hexToRgb(i);
        } else
          null != e.value.r &&
            null != e.value.g &&
            null != e.value.b &&
            (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            null != e.value.h &&
              null != e.value.s &&
              null != e.value.l &&
              (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        "random" == e.value
          ? (this.color.rgb = {
              r: Math.floor(256 * Math.random()) + 0,
              g: Math.floor(256 * Math.random()) + 0,
              b: Math.floor(256 * Math.random()) + 0,
            })
          : "string" == typeof e.value &&
            ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity =
        (m.particles.opacity.random ? Math.random() : 1) *
        m.particles.opacity.value),
        m.particles.opacity.anim.enable &&
          ((this.opacity_status = !1),
          (this.vo = m.particles.opacity.anim.speed / 100),
          m.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var s = {};
      switch (m.particles.move.direction) {
        case "top":
          s = { x: 0, y: -1 };
          break;
        case "top-right":
          s = { x: 0.5, y: -0.5 };
          break;
        case "right":
          s = { x: 1, y: -0 };
          break;
        case "bottom-right":
          s = { x: 0.5, y: 0.5 };
          break;
        case "bottom":
          s = { x: 0, y: 1 };
          break;
        case "bottom-left":
          s = { x: -0.5, y: 1 };
          break;
        case "left":
          s = { x: -1, y: 0 };
          break;
        case "top-left":
          s = { x: -0.5, y: -0.5 };
          break;
        default:
          s = { x: 0, y: 0 };
      }
      m.particles.move.straight
        ? ((this.vx = s.x),
          (this.vy = s.y),
          m.particles.move.random &&
            ((this.vx = this.vx * Math.random()),
            (this.vy = this.vy * Math.random())))
        : ((this.vx = s.x + Math.random() - 0.5),
          (this.vy = s.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var n = m.particles.shape.type;
      if ("object" == typeof n) {
        if (n instanceof Array) {
          var r = n[Math.floor(Math.random() * n.length)];
          this.shape = r;
        }
      } else this.shape = n;
      if ("image" == this.shape) {
        var c = m.particles.shape;
        (this.img = {
          src: c.image.src,
          ratio: c.image.width / c.image.height,
        }),
          this.img.ratio || (this.img.ratio = 1),
          "svg" == m.tmp.img_type &&
            null != m.tmp.source_svg &&
            (m.fn.vendors.createSvgImg(this),
            m.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (m.fn.particle.prototype.draw = function () {
      var e = this;
      if (null != e.radius_bubble) var t = e.radius_bubble;
      else t = e.radius;
      if (null != e.opacity_bubble) var a = e.opacity_bubble;
      else a = e.opacity;
      if (e.color.rgb)
        var i =
          "rgba(" +
          e.color.rgb.r +
          "," +
          e.color.rgb.g +
          "," +
          e.color.rgb.b +
          "," +
          a +
          ")";
      else
        i =
          "hsla(" +
          e.color.hsl.h +
          "," +
          e.color.hsl.s +
          "%," +
          e.color.hsl.l +
          "%," +
          a +
          ")";
      switch (
        ((m.canvas.ctx.fillStyle = i), m.canvas.ctx.beginPath(), e.shape)
      ) {
        case "circle":
          m.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
          break;
        case "edge":
          m.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
          break;
        case "triangle":
          m.fn.vendors.drawShape(
            m.canvas.ctx,
            e.x - t,
            e.y + t / 1.66,
            2 * t,
            3,
            2
          );
          break;
        case "polygon":
          m.fn.vendors.drawShape(
            m.canvas.ctx,
            e.x - t / (m.particles.shape.polygon.nb_sides / 3.5),
            e.y - t / 0.76,
            (2.66 * t) / (m.particles.shape.polygon.nb_sides / 3),
            m.particles.shape.polygon.nb_sides,
            1
          );
          break;
        case "star":
          m.fn.vendors.drawShape(
            m.canvas.ctx,
            e.x - (2 * t) / (m.particles.shape.polygon.nb_sides / 4),
            e.y - t / 1.52,
            (2 * t * 2.66) / (m.particles.shape.polygon.nb_sides / 3),
            m.particles.shape.polygon.nb_sides,
            2
          );
          break;
        case "image":
          if ("svg" == m.tmp.img_type) var s = e.img.obj;
          else s = m.tmp.img_obj;
          s &&
            m.canvas.ctx.drawImage(
              s,
              e.x - t,
              e.y - t,
              2 * t,
              (2 * t) / e.img.ratio
            );
      }
      m.canvas.ctx.closePath(),
        0 < m.particles.shape.stroke.width &&
          ((m.canvas.ctx.strokeStyle = m.particles.shape.stroke.color),
          (m.canvas.ctx.lineWidth = m.particles.shape.stroke.width),
          m.canvas.ctx.stroke()),
        m.canvas.ctx.fill();
    }),
    (m.fn.particlesCreate = function () {
      for (var e = 0; e < m.particles.number.value; e++)
        m.particles.array.push(
          new m.fn.particle(m.particles.color, m.particles.opacity.value)
        );
    }),
    (m.fn.particlesUpdate = function () {
      for (var e = 0; e < m.particles.array.length; e++) {
        var t = m.particles.array[e];
        if (m.particles.move.enable) {
          var a = m.particles.move.speed / 2;
          (t.x += t.vx * a), (t.y += t.vy * a);
        }
        if (
          (m.particles.opacity.anim.enable &&
            (1 == t.opacity_status
              ? (t.opacity >= m.particles.opacity.value &&
                  (t.opacity_status = !1),
                (t.opacity += t.vo))
              : (t.opacity <= m.particles.opacity.anim.opacity_min &&
                  (t.opacity_status = !0),
                (t.opacity -= t.vo)),
            t.opacity < 0 && (t.opacity = 0)),
          m.particles.size.anim.enable &&
            (1 == t.size_status
              ? (t.radius >= m.particles.size.value && (t.size_status = !1),
                (t.radius += t.vs))
              : (t.radius <= m.particles.size.anim.size_min &&
                  (t.size_status = !0),
                (t.radius -= t.vs)),
            t.radius < 0 && (t.radius = 0)),
          "bounce" == m.particles.move.out_mode)
        )
          var i = {
            x_left: t.radius,
            x_right: m.canvas.w,
            y_top: t.radius,
            y_bottom: m.canvas.h,
          };
        else
          i = {
            x_left: -t.radius,
            x_right: m.canvas.w + t.radius,
            y_top: -t.radius,
            y_bottom: m.canvas.h + t.radius,
          };
        switch (
          (t.x - t.radius > m.canvas.w
            ? ((t.x = i.x_left), (t.y = Math.random() * m.canvas.h))
            : t.x + t.radius < 0 &&
              ((t.x = i.x_right), (t.y = Math.random() * m.canvas.h)),
          t.y - t.radius > m.canvas.h
            ? ((t.y = i.y_top), (t.x = Math.random() * m.canvas.w))
            : t.y + t.radius < 0 &&
              ((t.y = i.y_bottom), (t.x = Math.random() * m.canvas.w)),
          m.particles.move.out_mode)
        ) {
          case "bounce":
            t.x + t.radius > m.canvas.w
              ? (t.vx = -t.vx)
              : t.x - t.radius < 0 && (t.vx = -t.vx),
              t.y + t.radius > m.canvas.h
                ? (t.vy = -t.vy)
                : t.y - t.radius < 0 && (t.vy = -t.vy);
        }
        if (
          (isInArray("grab", m.interactivity.events.onhover.mode) &&
            m.fn.modes.grabParticle(t),
          (isInArray("bubble", m.interactivity.events.onhover.mode) ||
            isInArray("bubble", m.interactivity.events.onclick.mode)) &&
            m.fn.modes.bubbleParticle(t),
          (isInArray("repulse", m.interactivity.events.onhover.mode) ||
            isInArray("repulse", m.interactivity.events.onclick.mode)) &&
            m.fn.modes.repulseParticle(t),
          m.particles.line_linked.enable || m.particles.move.attract.enable)
        )
          for (var s = e + 1; s < m.particles.array.length; s++) {
            var n = m.particles.array[s];
            m.particles.line_linked.enable && m.fn.interact.linkParticles(t, n),
              m.particles.move.attract.enable &&
                m.fn.interact.attractParticles(t, n),
              m.particles.move.bounce && m.fn.interact.bounceParticles(t, n);
          }
      }
    }),
    (m.fn.particlesDraw = function () {
      m.canvas.ctx.clearRect(0, 0, m.canvas.w, m.canvas.h),
        m.fn.particlesUpdate();
      for (var e = 0; e < m.particles.array.length; e++) {
        m.particles.array[e].draw();
      }
    }),
    (m.fn.particlesEmpty = function () {
      m.particles.array = [];
    }),
    (m.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(m.fn.checkAnimFrame),
        cancelRequestAnimFrame(m.fn.drawAnimFrame),
        (m.tmp.source_svg = void 0),
        (m.tmp.img_obj = void 0),
        (m.tmp.count_svg = 0),
        m.fn.particlesEmpty(),
        m.fn.canvasClear(),
        m.fn.vendors.start();
    }),
    (m.fn.interact.linkParticles = function (e, t) {
      var a = e.x - t.x,
        i = e.y - t.y,
        s = Math.sqrt(a * a + i * i);
      if (s <= m.particles.line_linked.distance) {
        var n =
          m.particles.line_linked.opacity -
          s /
            (1 / m.particles.line_linked.opacity) /
            m.particles.line_linked.distance;
        if (0 < n) {
          var r = m.particles.line_linked.color_rgb_line;
          (m.canvas.ctx.strokeStyle =
            "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")"),
            (m.canvas.ctx.lineWidth = m.particles.line_linked.width),
            m.canvas.ctx.beginPath(),
            m.canvas.ctx.moveTo(e.x, e.y),
            m.canvas.ctx.lineTo(t.x, t.y),
            m.canvas.ctx.stroke(),
            m.canvas.ctx.closePath();
        }
      }
    }),
    (m.fn.interact.attractParticles = function (e, t) {
      var a = e.x - t.x,
        i = e.y - t.y;
      if (Math.sqrt(a * a + i * i) <= m.particles.line_linked.distance) {
        var s = a / (1e3 * m.particles.move.attract.rotateX),
          n = i / (1e3 * m.particles.move.attract.rotateY);
        (e.vx -= s), (e.vy -= n), (t.vx += s), (t.vy += n);
      }
    }),
    (m.fn.interact.bounceParticles = function (e, t) {
      var a = e.x - t.x,
        i = e.y - t.y;
      Math.sqrt(a * a + i * i) <= e.radius + t.radius &&
        ((e.vx = -e.vx), (e.vy = -e.vy), (t.vx = -t.vx), (t.vy = -t.vy));
    }),
    (m.fn.modes.pushParticles = function (e, t) {
      m.tmp.pushing = !0;
      for (var a = 0; a < e; a++)
        m.particles.array.push(
          new m.fn.particle(m.particles.color, m.particles.opacity.value, {
            x: t ? t.pos_x : Math.random() * m.canvas.w,
            y: t ? t.pos_y : Math.random() * m.canvas.h,
          })
        ),
          a == e - 1 &&
            (m.particles.move.enable || m.fn.particlesDraw(),
            (m.tmp.pushing = !1));
    }),
    (m.fn.modes.removeParticles = function (e) {
      m.particles.array.splice(0, e),
        m.particles.move.enable || m.fn.particlesDraw();
    }),
    (m.fn.modes.bubbleParticle = function (c) {
      if (
        m.interactivity.events.onhover.enable &&
        isInArray("bubble", m.interactivity.events.onhover.mode)
      ) {
        var e = c.x - m.interactivity.mouse.pos_x,
          t = c.y - m.interactivity.mouse.pos_y,
          a =
            1 -
            (o = Math.sqrt(e * e + t * t)) /
              m.interactivity.modes.bubble.distance;
        function i() {
          (c.opacity_bubble = c.opacity), (c.radius_bubble = c.radius);
        }
        if (o <= m.interactivity.modes.bubble.distance) {
          if (0 <= a && "mousemove" == m.interactivity.status) {
            if (m.interactivity.modes.bubble.size != m.particles.size.value)
              if (m.interactivity.modes.bubble.size > m.particles.size.value) {
                0 <= (n = c.radius + m.interactivity.modes.bubble.size * a) &&
                  (c.radius_bubble = n);
              } else {
                var s = c.radius - m.interactivity.modes.bubble.size,
                  n = c.radius - s * a;
                c.radius_bubble = 0 < n ? n : 0;
              }
            var r;
            if (
              m.interactivity.modes.bubble.opacity != m.particles.opacity.value
            )
              if (
                m.interactivity.modes.bubble.opacity > m.particles.opacity.value
              )
                (r = m.interactivity.modes.bubble.opacity * a) > c.opacity &&
                  r <= m.interactivity.modes.bubble.opacity &&
                  (c.opacity_bubble = r);
              else
                (r =
                  c.opacity -
                  (m.particles.opacity.value -
                    m.interactivity.modes.bubble.opacity) *
                    a) < c.opacity &&
                  r >= m.interactivity.modes.bubble.opacity &&
                  (c.opacity_bubble = r);
          }
        } else i();
        "mouseleave" == m.interactivity.status && i();
      } else if (
        m.interactivity.events.onclick.enable &&
        isInArray("bubble", m.interactivity.events.onclick.mode)
      ) {
        if (m.tmp.bubble_clicking) {
          (e = c.x - m.interactivity.mouse.click_pos_x),
            (t = c.y - m.interactivity.mouse.click_pos_y);
          var o = Math.sqrt(e * e + t * t),
            l = (new Date().getTime() - m.interactivity.mouse.click_time) / 1e3;
          l > m.interactivity.modes.bubble.duration &&
            (m.tmp.bubble_duration_end = !0),
            l > 2 * m.interactivity.modes.bubble.duration &&
              ((m.tmp.bubble_clicking = !1), (m.tmp.bubble_duration_end = !1));
        }
        function v(e, t, a, i, s) {
          if (e != t)
            if (m.tmp.bubble_duration_end)
              null != a &&
                ((r =
                  e +
                  (e -
                    (i -
                      (l * (i - e)) / m.interactivity.modes.bubble.duration))),
                "size" == s && (c.radius_bubble = r),
                "opacity" == s && (c.opacity_bubble = r));
            else if (o <= m.interactivity.modes.bubble.distance) {
              if (null != a) var n = a;
              else n = i;
              if (n != e) {
                var r =
                  i - (l * (i - e)) / m.interactivity.modes.bubble.duration;
                "size" == s && (c.radius_bubble = r),
                  "opacity" == s && (c.opacity_bubble = r);
              }
            } else
              "size" == s && (c.radius_bubble = void 0),
                "opacity" == s && (c.opacity_bubble = void 0);
        }
        m.tmp.bubble_clicking &&
          (v(
            m.interactivity.modes.bubble.size,
            m.particles.size.value,
            c.radius_bubble,
            c.radius,
            "size"
          ),
          v(
            m.interactivity.modes.bubble.opacity,
            m.particles.opacity.value,
            c.opacity_bubble,
            c.opacity,
            "opacity"
          ));
      }
    }),
    (m.fn.modes.repulseParticle = function (i) {
      if (
        m.interactivity.events.onhover.enable &&
        isInArray("repulse", m.interactivity.events.onhover.mode) &&
        "mousemove" == m.interactivity.status
      ) {
        var e = i.x - m.interactivity.mouse.pos_x,
          t = i.y - m.interactivity.mouse.pos_y,
          a = Math.sqrt(e * e + t * t),
          s = e / a,
          n = t / a,
          r = clamp(
            (1 / (o = m.interactivity.modes.repulse.distance)) *
              (-1 * Math.pow(a / o, 2) + 1) *
              o *
              100,
            0,
            50
          ),
          c = { x: i.x + s * r, y: i.y + n * r };
        "bounce" == m.particles.move.out_mode
          ? (0 < c.x - i.radius && c.x + i.radius < m.canvas.w && (i.x = c.x),
            0 < c.y - i.radius && c.y + i.radius < m.canvas.h && (i.y = c.y))
          : ((i.x = c.x), (i.y = c.y));
      } else if (
        m.interactivity.events.onclick.enable &&
        isInArray("repulse", m.interactivity.events.onclick.mode)
      )
        if (
          (m.tmp.repulse_finish ||
            (m.tmp.repulse_count++,
            m.tmp.repulse_count == m.particles.array.length &&
              (m.tmp.repulse_finish = !0)),
          m.tmp.repulse_clicking)
        ) {
          var o = Math.pow(m.interactivity.modes.repulse.distance / 6, 3),
            l = m.interactivity.mouse.click_pos_x - i.x,
            v = m.interactivity.mouse.click_pos_y - i.y,
            p = l * l + v * v,
            d = (-o / p) * 1;
          p <= o &&
            (function () {
              var e = Math.atan2(v, l);
              if (
                ((i.vx = d * Math.cos(e)),
                (i.vy = d * Math.sin(e)),
                "bounce" == m.particles.move.out_mode)
              ) {
                var t = i.x + i.vx,
                  a = i.y + i.vy;
                t + i.radius > m.canvas.w
                  ? (i.vx = -i.vx)
                  : t - i.radius < 0 && (i.vx = -i.vx),
                  a + i.radius > m.canvas.h
                    ? (i.vy = -i.vy)
                    : a - i.radius < 0 && (i.vy = -i.vy);
              }
            })();
        } else
          0 == m.tmp.repulse_clicking && ((i.vx = i.vx_i), (i.vy = i.vy_i));
    }),
    (m.fn.modes.grabParticle = function (e) {
      if (
        m.interactivity.events.onhover.enable &&
        "mousemove" == m.interactivity.status
      ) {
        var t = e.x - m.interactivity.mouse.pos_x,
          a = e.y - m.interactivity.mouse.pos_y,
          i = Math.sqrt(t * t + a * a);
        if (i <= m.interactivity.modes.grab.distance) {
          var s =
            m.interactivity.modes.grab.line_linked.opacity -
            i /
              (1 / m.interactivity.modes.grab.line_linked.opacity) /
              m.interactivity.modes.grab.distance;
          if (0 < s) {
            var n = m.particles.line_linked.color_rgb_line;
            (m.canvas.ctx.strokeStyle =
              "rgba(" + n.r + "," + n.g + "," + n.b + "," + s + ")"),
              (m.canvas.ctx.lineWidth = m.particles.line_linked.width),
              m.canvas.ctx.beginPath(),
              m.canvas.ctx.moveTo(e.x, e.y),
              m.canvas.ctx.lineTo(
                m.interactivity.mouse.pos_x,
                m.interactivity.mouse.pos_y
              ),
              m.canvas.ctx.stroke(),
              m.canvas.ctx.closePath();
          }
        }
      }
    }),
    (m.fn.vendors.eventsListeners = function () {
      "window" == m.interactivity.detect_on
        ? (m.interactivity.el = window)
        : (m.interactivity.el = m.canvas.el),
        (m.interactivity.events.onhover.enable ||
          m.interactivity.events.onclick.enable) &&
          (m.interactivity.el.addEventListener("mousemove", function (e) {
            if (m.interactivity.el == window)
              var t = e.clientX,
                a = e.clientY;
            else (t = e.offsetX || e.clientX), (a = e.offsetY || e.clientY);
            (m.interactivity.mouse.pos_x = t),
              (m.interactivity.mouse.pos_y = a),
              m.tmp.retina &&
                ((m.interactivity.mouse.pos_x *= m.canvas.pxratio),
                (m.interactivity.mouse.pos_y *= m.canvas.pxratio)),
              (m.interactivity.status = "mousemove");
          }),
          m.interactivity.el.addEventListener("mouseleave", function (e) {
            (m.interactivity.mouse.pos_x = null),
              (m.interactivity.mouse.pos_y = null),
              (m.interactivity.status = "mouseleave");
          })),
        m.interactivity.events.onclick.enable &&
          m.interactivity.el.addEventListener("click", function () {
            if (
              ((m.interactivity.mouse.click_pos_x =
                m.interactivity.mouse.pos_x),
              (m.interactivity.mouse.click_pos_y = m.interactivity.mouse.pos_y),
              (m.interactivity.mouse.click_time = new Date().getTime()),
              m.interactivity.events.onclick.enable)
            )
              switch (m.interactivity.events.onclick.mode) {
                case "push":
                  m.particles.move.enable
                    ? m.fn.modes.pushParticles(
                        m.interactivity.modes.push.particles_nb,
                        m.interactivity.mouse
                      )
                    : 1 == m.interactivity.modes.push.particles_nb
                    ? m.fn.modes.pushParticles(
                        m.interactivity.modes.push.particles_nb,
                        m.interactivity.mouse
                      )
                    : 1 < m.interactivity.modes.push.particles_nb &&
                      m.fn.modes.pushParticles(
                        m.interactivity.modes.push.particles_nb
                      );
                  break;
                case "remove":
                  m.fn.modes.removeParticles(
                    m.interactivity.modes.remove.particles_nb
                  );
                  break;
                case "bubble":
                  m.tmp.bubble_clicking = !0;
                  break;
                case "repulse":
                  (m.tmp.repulse_clicking = !0),
                    (m.tmp.repulse_count = 0),
                    (m.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      m.tmp.repulse_clicking = !1;
                    }, 1e3 * m.interactivity.modes.repulse.duration);
              }
          });
    }),
    (m.fn.vendors.densityAutoParticles = function () {
      if (m.particles.number.density.enable) {
        var e = (m.canvas.el.width * m.canvas.el.height) / 1e3;
        m.tmp.retina && (e /= 2 * m.canvas.pxratio);
        var t =
            (e * m.particles.number.value) /
            m.particles.number.density.value_area,
          a = m.particles.array.length - t;
        a < 0
          ? m.fn.modes.pushParticles(Math.abs(a))
          : m.fn.modes.removeParticles(a);
      }
    }),
    (m.fn.vendors.checkOverlap = function (e, t) {
      for (var a = 0; a < m.particles.array.length; a++) {
        var i = m.particles.array[a],
          s = e.x - i.x,
          n = e.y - i.y;
        Math.sqrt(s * s + n * n) <= e.radius + i.radius &&
          ((e.x = t ? t.x : Math.random() * m.canvas.w),
          (e.y = t ? t.y : Math.random() * m.canvas.h),
          m.fn.vendors.checkOverlap(e));
      }
    }),
    (m.fn.vendors.createSvgImg = function (n) {
      var e = m.tmp.source_svg.replace(
          /#([0-9A-F]{3,6})/gi,
          function (e, t, a, i) {
            if (n.color.rgb)
              var s =
                "rgba(" +
                n.color.rgb.r +
                "," +
                n.color.rgb.g +
                "," +
                n.color.rgb.b +
                "," +
                n.opacity +
                ")";
            else
              s =
                "hsla(" +
                n.color.hsl.h +
                "," +
                n.color.hsl.s +
                "%," +
                n.color.hsl.l +
                "%," +
                n.opacity +
                ")";
            return s;
          }
        ),
        t = new Blob([e], { type: "image/svg+xml;charset=utf-8" }),
        a = window.URL || window.webkitURL || window,
        i = a.createObjectURL(t),
        s = new Image();
      s.addEventListener("load", function () {
        (n.img.obj = s),
          (n.img.loaded = !0),
          a.revokeObjectURL(i),
          m.tmp.count_svg++;
      }),
        (s.src = i);
    }),
    (m.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(m.fn.drawAnimFrame), a.remove(), (pJSDom = null);
    }),
    (m.fn.vendors.drawShape = function (e, t, a, i, s, n) {
      var r = s * n,
        c = s / n,
        o = (180 * (c - 2)) / c,
        l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(t, a), e.moveTo(0, 0);
      for (var v = 0; v < r; v++)
        e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (m.fn.vendors.exportImg = function () {
      window.open(m.canvas.el.toDataURL("image/png"), "_blank");
    }),
    (m.fn.vendors.loadImg = function (e) {
      if (((m.tmp.img_error = void 0), "" != m.particles.shape.image.src))
        if ("svg" == e) {
          var t = new XMLHttpRequest();
          t.open("GET", m.particles.shape.image.src),
            (t.onreadystatechange = function (e) {
              4 == t.readyState &&
                (200 == t.status
                  ? ((m.tmp.source_svg = e.currentTarget.response),
                    m.fn.vendors.checkBeforeDraw())
                  : (console.log("Error pJS - Image not found"),
                    (m.tmp.img_error = !0)));
            }),
            t.send();
        } else {
          var a = new Image();
          a.addEventListener("load", function () {
            (m.tmp.img_obj = a), m.fn.vendors.checkBeforeDraw();
          }),
            (a.src = m.particles.shape.image.src);
        }
      else console.log("Error pJS - No image.src"), (m.tmp.img_error = !0);
    }),
    (m.fn.vendors.draw = function () {
      "image" == m.particles.shape.type
        ? "svg" == m.tmp.img_type
          ? m.tmp.count_svg >= m.particles.number.value
            ? (m.fn.particlesDraw(),
              m.particles.move.enable
                ? (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw))
                : cancelRequestAnimFrame(m.fn.drawAnimFrame))
            : m.tmp.img_error ||
              (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw))
          : null != m.tmp.img_obj
          ? (m.fn.particlesDraw(),
            m.particles.move.enable
              ? (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw))
              : cancelRequestAnimFrame(m.fn.drawAnimFrame))
          : m.tmp.img_error ||
            (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw))
        : (m.fn.particlesDraw(),
          m.particles.move.enable
            ? (m.fn.drawAnimFrame = requestAnimFrame(m.fn.vendors.draw))
            : cancelRequestAnimFrame(m.fn.drawAnimFrame));
    }),
    (m.fn.vendors.checkBeforeDraw = function () {
      "image" == m.particles.shape.type
        ? "svg" == m.tmp.img_type && null == m.tmp.source_svg
          ? (m.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(m.tmp.checkAnimFrame),
            m.tmp.img_error || (m.fn.vendors.init(), m.fn.vendors.draw()))
        : (m.fn.vendors.init(), m.fn.vendors.draw());
    }),
    (m.fn.vendors.init = function () {
      m.fn.retinaInit(),
        m.fn.canvasInit(),
        m.fn.canvasSize(),
        m.fn.canvasPaint(),
        m.fn.particlesCreate(),
        m.fn.vendors.densityAutoParticles(),
        (m.particles.line_linked.color_rgb_line = hexToRgb(
          m.particles.line_linked.color
        ));
    }),
    (m.fn.vendors.start = function () {
      isInArray("image", m.particles.shape.type)
        ? ((m.tmp.img_type = m.particles.shape.image.src.substr(
            m.particles.shape.image.src.length - 3
          )),
          m.fn.vendors.loadImg(m.tmp.img_type))
        : m.fn.vendors.checkBeforeDraw();
    }),
    m.fn.vendors.eventsListeners(),
    m.fn.vendors.start();
};
function hexToRgb(e) {
  e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, a, i) {
    return t + t + a + a + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t
    ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) }
    : null;
}
function clamp(e, t, a) {
  return Math.min(Math.max(e, t), a);
}
function isInArray(e, t) {
  return -1 < t.indexOf(e);
}
(Object.deepExtend = function (e, t) {
  for (var a in t)
    t[a] && t[a].constructor && t[a].constructor === Object
      ? ((e[a] = e[a] || {}), arguments.callee(e[a], t[a]))
      : (e[a] = t[a]);
  return e;
}),
  (window.requestAnimFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (e) {
      window.setTimeout(e, 1e3 / 60);
    }),
  (window.cancelRequestAnimFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelRequestAnimationFrame ||
    window.mozCancelRequestAnimationFrame ||
    window.oCancelRequestAnimationFrame ||
    window.msCancelRequestAnimationFrame ||
    clearTimeout),
  (window.pJSDom = []),
  (window.particlesJS = function (e, t) {
    "string" != typeof e && ((t = e), (e = "particles-js")),
      e || (e = "particles-js");
    var a = document.getElementById(e),
      i = "particles-js-canvas-el",
      s = a.getElementsByClassName(i);
    if (s.length) for (; 0 < s.length; ) a.removeChild(s[0]);
    var n = document.createElement("canvas");
    (n.className = i),
      (n.style.width = "100%"),
      (n.style.height = "100%"),
      null != document.getElementById(e).appendChild(n) &&
        pJSDom.push(new pJS(e, t));
  }),
  (window.particlesJS.load = function (a, e, i) {
    var s = new XMLHttpRequest();
    s.open("GET", e),
      (s.onreadystatechange = function (e) {
        if (4 == s.readyState)
          if (200 == s.status) {
            var t = JSON.parse(e.currentTarget.response);
            window.particlesJS(a, t), i && i();
          } else
            console.log("Error pJS - XMLHttpRequest status: " + s.status),
              console.log("Error pJS - File config not found");
      }),
      s.send();
  });
//# sourceMappingURL=/sm/db0aa56476985dfc022f413cb76a72c0e9ab9a21d77413ae3a84bbb7a49e07a3.map