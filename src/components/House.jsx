import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import gsap from 'gsap'
import { motion } from 'framer-motion-3d'

export function House(props) {

  const { section } = props
  const { nodes, materials } = useGLTF('./model/house.glb')
  const ref = useRef();
  const tl = useRef();
  const windowSize = useRef([window.innerWidth, window.innerHeight])
  const frombottom = -(windowSize.current[1] / 4)

  useLayoutEffect(() => {
    tl.current = gsap.timeline();
    ref.current.position.y = -1.5;
    tl.current.to(ref.current.rotation, {y: "+=0.02", repeat:-1, ease:'none', repeatRefresh:true});
    tl.current.from(ref.current.position, {y:frombottom, duration:2, ease:'Power4.easeOut', onComplete:sendCallBack})
  }, [])

  const sendCallBack = () => {
    console.log('house is sending callback ----')
  }

  return (
    <motion.group {...props} dispose={null} ref={ref} 
            animate={{
              opacity: section === 0 ? 1 : 0
            }}
    >
      <mesh geometry={nodes.Vert001.geometry} material={nodes.Vert001.material} />
      <mesh geometry={nodes.Cube033.geometry} material={materials['sand.002']} />
      <mesh geometry={nodes.axe_handle001.geometry} material={materials['Material.014']} position={[0.674, 3.412, -0.945]} rotation={[-0.217, -0.237, -Math.PI]} scale={[-0.009, -0.012, -0.094]} />
      <group position={[-1.387, 3.557, -2.185]}>
        <mesh geometry={nodes.Cube233.geometry} material={materials['back-window.003']} />
        <mesh geometry={nodes.Cube233_1.geometry} material={materials['Material.244']} />
      </group>
      <group position={[-0.348, 3.221, -2.187]}>
        <mesh geometry={nodes.Cube234.geometry} material={materials['backdoor frame.003']} />
        <mesh geometry={nodes.Cube234_1.geometry} material={materials['backdoor windows.003']} />
      </group>
      <mesh geometry={nodes.bench_2001.geometry} material={materials['Material.246']} position={[-2.731, 3.337, -0.602]} />
      <group position={[-3.511, 3.25, -3.118]} scale={1.485}
    >
        <mesh geometry={nodes.Cube238.geometry} material={materials['tree - trunk 2.003']} />
        <mesh geometry={nodes.Cube238_1.geometry} material={materials['tree - top 2.003']} />
      </group>
      <mesh geometry={nodes.boat001.geometry} material={materials['Material.062']} position={[2.853, 2.032, 1.677]} rotation={[-Math.PI, 1.534, -Math.PI]} scale={0.23} />
      <mesh geometry={nodes.boat_plank001.geometry} material={materials['Material.064']} position={[2.665, 2.05, 1.679]} rotation={[0, -1.534, 0]} scale={[-0.276, -0.008, -0.043]} />
      <mesh geometry={nodes.boulder_1001.geometry} material={nodes.boulder_1001.material} position={[-3.32, 3.219, 0.966]} />
      <mesh geometry={nodes.boulder_2001.geometry} material={nodes.boulder_2001.material} position={[-3.124, 3.242, 1.357]} rotation={[0, -0.934, 0]} />
      <mesh geometry={nodes.boulder_3001.geometry} material={nodes.boulder_3001.material} position={[-2.683, 3.165, 1.537]} rotation={[-0.945, 0.574, 2.077]} />
      <mesh geometry={nodes.campfire_dirt001.geometry} material={materials['dirt.003']} position={[-2.796, 3.189, 1.032]} scale={0.28} />
      <mesh geometry={nodes.campfire_rock_4001.geometry} material={nodes.campfire_rock_4001.material} position={[-2.717, 3.197, 0.849]} rotation={[0, -0.888, 0]} scale={0.061} />
      <mesh geometry={nodes.campfire_rock_6001.geometry} material={nodes.campfire_rock_6001.material} position={[-2.625, 3.193, 1.043]} rotation={[0, -1.499, 0]} scale={0.06} />
      <mesh geometry={nodes.campfire_rock_7001.geometry} material={nodes.campfire_rock_7001.material} position={[-2.675, 3.204, 1.155]} rotation={[0, -1.499, 0]} scale={0.044} />
      <mesh geometry={nodes.campfire_rock_8001.geometry} material={nodes.campfire_rock_8001.material} position={[-2.751, 3.204, 1.236]} rotation={[0, 0.405, 0]} scale={0.046} />
      <mesh geometry={nodes.campfire_rock_9001.geometry} material={nodes.campfire_rock_9001.material} position={[-2.92, 3.215, 1.181]} rotation={[0, 1.537, 0]} scale={0.061} />
      <group position={[-2.898, 3.187, 0.579]} rotation={[-Math.PI, 1.561, -Math.PI]} scale={[0.102, 0.055, 0.102]}>
        <mesh geometry={nodes.Cylinder040.geometry} material={materials['Material.253']} />
        <mesh geometry={nodes.Cylinder040_1.geometry} material={materials['Material.254']} />
      </group>
      <group position={[-2.626, 3.201, 0.658]} scale={[0.092, 0.049, 0.092]}>
        <mesh geometry={nodes.Cylinder041.geometry} material={materials['Material.255']} />
        <mesh geometry={nodes.Cylinder041_1.geometry} material={materials['Material.256']} />
      </group>
      <group position={[-2.323, 3.173, 0.796]} rotation={[0, 1.245, 0]} scale={[0.092, 0.049, 0.092]}>
        <mesh geometry={nodes.Cylinder042.geometry} material={materials['Material.257']} />
        <mesh geometry={nodes.Cylinder042_1.geometry} material={materials['Material.258']} />
      </group>
      <group position={[-2.375, 3.192, 1.085]} rotation={[0, 1.245, 0]} scale={[0.092, 0.049, 0.092]}>
        <mesh geometry={nodes.Cylinder043.geometry} material={materials['Material.259']} />
        <mesh geometry={nodes.Cylinder043_1.geometry} material={materials['Material.260']} />
      </group>
      <mesh geometry={nodes.chair_support_2001.geometry} material={materials['Material.280']} position={[-1.463, 3.446, -2.237]} rotation={[0, 0.541, 0]} scale={[0.929, 1.226, 0.929]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.281']} position={[-1.346, 3.538, -2.201]} scale={[18.874, 0.609, 1.253]} />
      <group position={[0.329, 3.267, -0.974]} rotation={[1.563, 0.031, 0.238]} scale={[0.089, 0.136, 0.089]}>
        <mesh geometry={nodes.Cylinder044.geometry} material={materials['Material.282']} />
        <mesh geometry={nodes.Cylinder044_1.geometry} material={materials['Material.006']} />
      </group>
      <group position={[0.693, 3.194, -0.974]} scale={0.116}>
        <mesh geometry={nodes.Cylinder048.geometry} material={materials['Material.286']} />
        <mesh geometry={nodes.Cylinder048_1.geometry} material={materials['Material.005']} />
      </group>
      <mesh geometry={nodes.d1_fence_1001.geometry} material={nodes.d1_fence_1001.material} position={[-0.64, 3.098, 1.748]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.286, 0.695, 0.679]} />
      <mesh geometry={nodes.d1_fence_2001.geometry} material={nodes.d1_fence_2001.material} position={[0.187, 3.098, 1.748]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.286, 0.695, 0.679]} />
      <mesh geometry={nodes.d1_floor001.geometry} material={materials['Material.016']} position={[-0.23, 2.984, 1.883]} scale={[1, 3.223, 1]} />
      <mesh geometry={nodes.d1_staircase_side_support_1001.geometry} material={nodes.d1_staircase_side_support_1001.material} position={[-0.64, 2.999, 1.921]} />
      <mesh geometry={nodes.d1_support_beam_1001.geometry} material={materials['Material.019']} position={[-0.641, 2.925, 1.626]} rotation={[0, 0, -Math.PI / 2]} scale={[0.758, 2.488, 0.615]} />
      <mesh geometry={nodes.d1_support_beam_2001.geometry} material={materials['Material.018']} position={[-0.641, 2.925, 1.872]} rotation={[0, 0, -Math.PI / 2]} scale={[0.758, 2.488, 0.615]} />
      <mesh geometry={nodes.d1_support_beam_3001.geometry} material={materials['Material.020']} position={[0.186, 2.925, 1.626]} rotation={[0, 0, -Math.PI / 2]} scale={[0.758, 2.488, 0.615]} />
      <mesh geometry={nodes.d1_support_beam_4001.geometry} material={materials['Material.021']} position={[0.186, 2.925, 1.872]} rotation={[0, 0, -Math.PI / 2]} scale={[0.758, 2.488, 0.615]} />
      <mesh geometry={nodes.d2_fence_1001.geometry} material={nodes.d2_fence_1001.material} position={[-0.739, 2.919, 2.493]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.874, 0.695, 1]} />
      <mesh geometry={nodes.d2_fence_2001.geometry} material={nodes.d2_fence_2001.material} position={[-0.229, 2.919, 2.858]} rotation={[Math.PI / 2, 0, 0]} scale={[1.034, 0.695, 1]} />
      <mesh geometry={nodes.d2_fence_4001.geometry} material={nodes.d2_fence_4001.material} position={[1.25, 2.55, 2.113]} rotation={[1.577, -0.379, -0.002]} scale={[2.359, 0.695, 1.036]} />
      <mesh geometry={nodes.d2_stair_support_1001.geometry} material={nodes.d2_stair_support_1001.material} position={[0.375, 2.777, 2.875]} />
      <mesh geometry={nodes.d2_stair_support_2001.geometry} material={nodes.d2_stair_support_2001.material} position={[0.375, 2.777, 2.126]} />
      <mesh geometry={nodes.d2_support_1001.geometry} material={materials['Material.023']} position={[-0.734, 2.32, 2.125]} rotation={[0, 0, -Math.PI / 2]} scale={[1.817, 4.708, 1.296]} />
      <mesh geometry={nodes.d2_support_2001.geometry} material={materials['Material.027']} position={[-0.734, 2.32, 2.86]} rotation={[0, 0, -Math.PI / 2]} scale={[1.817, 4.708, 1.296]} />
      <mesh geometry={nodes.d2_support_3001.geometry} material={materials['Material.053']} position={[0.28, 2.32, 2.86]} rotation={[0, 0, -Math.PI / 2]} scale={[1.817, 4.708, 1.296]} />
      <mesh geometry={nodes.d2_support_4001.geometry} material={materials['Material.052']} position={[0.28, 2.32, 2.125]} rotation={[0, 0, -Math.PI / 2]} scale={[1.817, 4.708, 1.296]} />
      <mesh geometry={nodes.d3_fence_1001.geometry} material={nodes.d3_fence_1001.material} position={[2.724, 2.141, 2.858]} rotation={[Math.PI / 2, 0, 0]} scale={[1.034, 0.695, 1]} />
      <mesh geometry={nodes.d3_fence_2001.geometry} material={nodes.d3_fence_2001.material} position={[3.212, 2.141, 2.472]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.904, 0.695, 1]} />
      <mesh geometry={nodes.d3_support_3001.geometry} material={materials['Material.056']} position={[2.257, 2.016, 2.121]} rotation={[0, 0, -Math.PI / 2]} scale={[0.78, 4.708, 1.296]} />
      <mesh geometry={nodes.d3_support_4001.geometry} material={materials['Material.060']} position={[3.218, 2.016, 2.121]} rotation={[0, 0, -Math.PI / 2]} scale={[0.78, 4.708, 1.296]} />
      <mesh geometry={nodes.door_knob001.geometry} material={materials['Material.287']} position={[-0.989, 3.493, -0.398]} scale={0.009} />
      <mesh geometry={nodes.door_knob_long_part001.geometry} material={materials['house - door knob handle.003']} position={[-0.99, 3.493, -0.41]} scale={[0.003, 0.003, 0.004]} />
      <mesh geometry={nodes.door_temp001.geometry} material={materials['door temp.003']} position={[-1.113, 3.156, -0.407]} scale={[1, 1, 0.064]} />
      <mesh geometry={nodes.flagstone_2001.geometry} material={nodes.flagstone_2001.material} position={[-1.08, 3.188, 0.243]} rotation={[0, 0.852, 0]} scale={[-0.084, -0.009, -0.084]} />
      <mesh geometry={nodes.flagstone_3001.geometry} material={nodes.flagstone_3001.material} position={[-0.899, 3.194, 0.22]} rotation={[0, -0.027, 0]} scale={[-0.082, -0.009, -0.082]} />
      <mesh geometry={nodes.flagstone_4001.geometry} material={nodes.flagstone_4001.material} position={[-1.182, 3.182, 0.45]} rotation={[Math.PI, -0.544, Math.PI]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_5001.geometry} material={nodes.flagstone_5001.material} position={[-1.031, 3.191, 0.425]} rotation={[Math.PI, -0.357, Math.PI]} scale={[-0.04, -0.004, -0.04]} />
      <mesh geometry={nodes.flagstone_7002.geometry} material={nodes.flagstone_7002.material} position={[-1.142, 3.186, 0.598]} rotation={[0, -1.027, 0]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_7003.geometry} material={nodes.flagstone_7003.material} position={[-1.012, 3.194, 0.525]} rotation={[0, 0.482, 0]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_8001.geometry} material={nodes.flagstone_8001.material} position={[-1.13, 3.186, 0.818]} rotation={[Math.PI, -0.393, Math.PI]} scale={[-0.087, -0.009, -0.087]} />
      <mesh geometry={nodes.flagstone_9001.geometry} material={nodes.flagstone_9001.material} position={[-1.005, 3.189, 0.661]} rotation={[Math.PI, -1.275, Math.PI]} scale={[-0.058, -0.006, -0.058]} />
      <mesh geometry={nodes.flagstone_10001.geometry} material={nodes.flagstone_10001.material} position={[-0.849, 3.192, 0.608]} rotation={[0, -1.397, 0]} scale={[-0.06, -0.006, -0.06]} />
      <mesh geometry={nodes.flagstone_11001.geometry} material={nodes.flagstone_11001.material} position={[-1.121, 3.194, 1.004]} rotation={[0, 0.482, 0]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_12001.geometry} material={nodes.flagstone_12001.material} position={[-0.952, 3.194, 0.82]} rotation={[Math.PI, -1, Math.PI]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_13001.geometry} material={nodes.flagstone_13001.material} position={[-0.97, 3.182, 1.139]} rotation={[Math.PI, -1.466, Math.PI]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_14001.geometry} material={nodes.flagstone_14001.material} position={[-0.899, 3.194, 0.96]} rotation={[0, 0.837, 0]} scale={[-0.082, -0.009, -0.082]} />
      <mesh geometry={nodes.flagstone_15001.geometry} material={nodes.flagstone_15001.material} position={[-0.799, 3.184, 0.787]} rotation={[0, -0.678, 0]} scale={[-0.077, -0.008, -0.077]} />
      <mesh geometry={nodes.flagstone_16001.geometry} material={nodes.flagstone_16001.material} position={[-0.81, 3.191, 1.212]} rotation={[0, -1.018, 0]} scale={[-0.064, -0.007, -0.064]} />
      <mesh geometry={nodes.flagstone_17001.geometry} material={nodes.flagstone_17001.material} position={[-0.754, 3.188, 1.096]} rotation={[0, 1.453, 0]} scale={[-0.084, -0.009, -0.084]} />
      <mesh geometry={nodes.flagstone_18001.geometry} material={nodes.flagstone_18001.material} position={[-0.666, 3.189, 0.899]} rotation={[0, -0.813, 0]} scale={[-0.058, -0.006, -0.058]} />
      <mesh geometry={nodes.flagstone_19001.geometry} material={nodes.flagstone_19001.material} position={[-0.588, 3.182, 1.218]} rotation={[-0.154, -1.434, 0]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_20001.geometry} material={nodes.flagstone_20001.material} position={[-0.523, 3.182, 0.949]} rotation={[0, -1.227, 0]} scale={[-0.081, -0.009, -0.081]} />
      <mesh geometry={nodes.flagstone_21001.geometry} material={nodes.flagstone_21001.material} position={[-0.419, 3.186, 1.077]} rotation={[0, 1.349, 0]} scale={[-0.087, -0.009, -0.087]} />
      <group position={[-1.677, 3.682, -0.412]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube318.geometry} material={materials['front-window-glass.003']} />
        <mesh geometry={nodes.Cube318_1.geometry} material={materials['front-window-pane.003']} />
      </group>
      <group position={[-0.22, 3.682, -1.315]} rotation={[Math.PI, 0, Math.PI]}>
        <mesh geometry={nodes.Cube320.geometry} material={materials['front-window-glass.003']} />
        <mesh geometry={nodes.Cube320_1.geometry} material={materials['front-window-pane.003']} />
      </group>
      <group position={[-2, 3.682, -1.315]}>
        <mesh geometry={nodes.Cube321.geometry} material={materials['front-window-glass.003']} />
        <mesh geometry={nodes.Cube321_1.geometry} material={materials['front-window-pane.003']} />
      </group>
      <mesh geometry={nodes.grass001.geometry} material={materials['grass.003']} position={[-3.697, 2.879, -3.638]} />
      <mesh geometry={nodes.Icosphere001.geometry} material={nodes.Icosphere001.material} position={[1.583, 3.23, -2.737]} rotation={[Math.PI, -0.991, Math.PI]} />
      <mesh geometry={nodes.Icosphere002.geometry} material={nodes.Icosphere002.material} position={[1.202, 3.306, -2.558]} rotation={[Math.PI, -0.991, Math.PI]} />
      <mesh geometry={nodes.Icosphere008.geometry} material={nodes.Icosphere008.material} position={[1.397, 3.318, -3.04]} rotation={[-1.307, -0.788, 0.227]} />
      <mesh geometry={nodes.Icosphere009.geometry} material={nodes.Icosphere009.material} position={[1.372, 3.257, 1.166]} rotation={[-2.989, -0.63, -2.712]} scale={0.795} />
      <mesh geometry={nodes.Icosphere010.geometry} material={nodes.Icosphere010.material} position={[0.712, 3.199, 1.301]} rotation={[-0.126, -0.223, 0.311]} scale={0.831} />
      <mesh geometry={nodes.leg_1001.geometry} material={materials['Material.288']} position={[-2.378, 3.34, -0.194]} rotation={[Math.PI / 4, -Math.PI / 2, 0]} scale={[0.549, 1.184, 0.474]} />
      <mesh geometry={nodes.leg_2001.geometry} material={materials['Material.289']} position={[-2.378, 3.34, -0.523]} rotation={[-Math.PI / 4, Math.PI / 2, 0]} scale={[0.549, 1.184, 0.474]} />
      <mesh geometry={nodes.leg_4001.geometry} material={materials['Material.291']} position={[-3.078, 3.34, -0.523]} rotation={[-Math.PI / 4, Math.PI / 2, 0]} scale={[0.549, 1.184, 0.474]} />
      <group position={[0.622, 3.696, -1.756]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder050.geometry} material={materials['Material.292']} />
        <mesh geometry={nodes.Cylinder050_1.geometry} material={materials['Material.293']} />
      </group>
      <group position={[0.622, 3.552, -1.66]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder051.geometry} material={materials['Material.294']} />
        <mesh geometry={nodes.Cylinder051_1.geometry} material={materials['Material.295']} />
      </group>
      <group position={[0.622, 3.552, -1.852]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder052.geometry} material={materials['Material.296']} />
        <mesh geometry={nodes.Cylinder052_1.geometry} material={materials['Material.297']} />
      </group>
      <group position={[0.611, 3.404, -1.572]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder053.geometry} material={materials['Material.298']} />
        <mesh geometry={nodes.Cylinder053_1.geometry} material={materials['Material.057']} />
      </group>
      <group position={[0.611, 3.404, -1.754]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder054.geometry} material={materials['Material.299']} />
        <mesh geometry={nodes.Cylinder054_1.geometry} material={materials['Material.095']} />
      </group>
      <group position={[0.611, 3.404, -1.937]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder055.geometry} material={materials['Material.300']} />
        <mesh geometry={nodes.Cylinder055_1.geometry} material={materials['Material.072']} />
      </group>
      <group position={[0.611, 3.267, -1.47]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder056.geometry} material={materials['Material.301']} />
        <mesh geometry={nodes.Cylinder056_1.geometry} material={materials['Material.004']} />
      </group>
      <group position={[0.611, 3.267, -1.657]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder057.geometry} material={materials['Material.302']} />
        <mesh geometry={nodes.Cylinder057_1.geometry} material={materials['Material.002']} />
      </group>
      <group position={[0.611, 3.267, -1.836]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder058.geometry} material={materials['Material.303']} />
        <mesh geometry={nodes.Cylinder058_1.geometry} material={materials['Material.099']} />
      </group>
      <group position={[0.611, 3.267, -2.023]} rotation={[1.602, 0, -Math.PI / 2]} scale={[0.089, 0.334, 0.089]}>
        <mesh geometry={nodes.Cylinder059.geometry} material={materials['Material.304']} />
        <mesh geometry={nodes.Cylinder059_1.geometry} material={materials['Material.001']} />
      </group>
      <mesh geometry={nodes.rock001.geometry} material={materials['rock.003']} position={[-3.008, 1.88, -2.998]} />
      <mesh geometry={nodes.sail001.geometry} material={materials['Material.066']} position={[3.342, 2.638, 1.668]} rotation={[0, -1.479, -Math.PI / 2]} scale={0.228} />
      <mesh geometry={nodes.sail_pole001.geometry} material={materials['Material.065']} position={[3.109, 1.985, 1.691]} rotation={[0, -1.479, 0]} scale={0.385} />
      <mesh geometry={nodes.Sphere015.geometry} material={materials['house - flower yellow.003']} position={[-1.907, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.Sphere030.geometry} material={materials['house - flower pink.003']} position={[-1.827, 3.212, -0.373]} scale={0.037} />
      <mesh geometry={nodes.Sphere031.geometry} material={materials['house - flower - red.003']} position={[-1.752, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.Sphere032.geometry} material={materials['house - flower - purple.003']} position={[-1.681, 3.212, -0.373]} scale={0.037} />
      <mesh geometry={nodes.Sphere033.geometry} material={materials['Material.305']} position={[-1.603, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.Sphere034.geometry} material={materials['Material.306']} position={[-1.528, 3.212, -0.373]} scale={0.037} />
      <mesh geometry={nodes.Sphere035.geometry} material={materials['Material.307']} position={[-1.45, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.stair1002.geometry} material={materials['Material.315']} position={[-1.113, 3.194, -0.213]} />
      <mesh geometry={nodes.stair2002.geometry} material={materials['Material.316']} position={[-1.113, 3.175, -0.119]} />
      <mesh geometry={nodes.stair2003.geometry} material={materials['Material.317']} position={[-0.781, 3.167, -2.488]} rotation={[Math.PI, 0, Math.PI]} scale={[1.844, 1, 1]} />
      <mesh geometry={nodes.support_1001.geometry} material={materials['Material.318']} position={[-3.116, 3.313, -0.355]} rotation={[0, Math.PI / 2, 0]} scale={[0.81, 1.184, 0.474]} />
      <mesh geometry={nodes.support_2001.geometry} material={materials['Material.319']} position={[-2.342, 3.313, -0.355]} rotation={[0, Math.PI / 2, 0]} scale={[0.81, 1.184, 0.474]} />
      <mesh geometry={nodes.table_leg_1001.geometry} material={materials['Material.320']} position={[-1.581, 3.304, -2.386]} scale={1.305} />
      <mesh geometry={nodes.table_leg_2001.geometry} material={materials['Material.321']} position={[-1.763, 3.304, -2.386]} scale={1.305} />
      <mesh geometry={nodes.table_leg_3001.geometry} material={materials['Material.322']} position={[-1.581, 3.304, -2.203]} scale={1.305} />
      <mesh geometry={nodes.table_leg_4001.geometry} material={materials['Material.323']} position={[-1.763, 3.304, -2.203]} scale={1.305} />
      <mesh geometry={nodes.table_top002.geometry} material={materials['Material.324']} position={[-1.655, 3.363, -2.307]} scale={1.305} />
      <group position={[-1.111, 3.131, -1.3]}>
        <mesh geometry={nodes.Cube344.geometry} material={materials['house - facade.003']} />
        <mesh geometry={nodes.Cube344_1.geometry} material={materials['house - roof.003']} />
        <mesh geometry={nodes.Cube344_2.geometry} material={materials['house - roof trim.003']} />
      </group>
      <mesh geometry={nodes.water001.geometry} material={materials['water.003']} position={[-0.027, 1.927, -0.057]} />
      <motion.group 
              position={[-3.155, 3.208, -1.972]} 
              rotation={[0, 0.623, 0]} 
              scale={1.273} 
              animate={{
                scale: section === 0 ? 1 : 0
              }}
      >
        <mesh geometry={nodes.Cube023.geometry} material={materials['tree - trunk']} />
        <mesh geometry={nodes.Cube023_1.geometry} material={materials['tree - top']} />
      </motion.group>
      <motion.group 
              position={[0.686, 3.22, -2.927]} 
              rotation={[0, -0.654, 0]} 
              scale={1.526} 
              animate={{
                scale: section === 0 ? 1 : 0
                }}
      >
        <mesh geometry={nodes.Cube024.geometry} material={materials['tree - trunk 3']} />
        <mesh geometry={nodes.Cube024_1.geometry} material={materials['tree - top 3']} />
      </motion.group>
      <mesh geometry={nodes.campfire_rock_1.geometry} material={nodes.campfire_rock_1.material} position={[-2.947, 3.219, 1.032]} scale={0.069} />
      <mesh geometry={nodes.campfire_rock_3.geometry} material={nodes.campfire_rock_3.material} position={[-2.829, 3.203, 0.843]} rotation={[0, 1.565, 0]} scale={0.053} />
      <mesh geometry={nodes.campfire_rock_4.geometry} material={nodes.campfire_rock_4.material} position={[-2.717, 3.197, 0.849]} rotation={[0, -0.888, 0]} scale={0.061} />
      <mesh geometry={nodes.campfire_rock_5.geometry} material={nodes.campfire_rock_5.material} position={[-2.647, 3.219, 0.942]} rotation={[Math.PI, -1.074, Math.PI]} scale={0.041} />
      <mesh geometry={nodes.campfire_rock_2.geometry} material={nodes.campfire_rock_2.material} position={[-2.908, 3.217, 0.911]} rotation={[0, 0.519, 0]} scale={0.053} />
      <mesh geometry={nodes.campfire_dirt.geometry} material={materials.dirt} position={[-2.796, 3.189, 1.032]} scale={0.28} />
      <mesh geometry={nodes.campfire_log_1.geometry} material={materials['Material.048']} position={[-2.905, 3.187, 1.032]} rotation={[0.307, 0.419, -0.662]} scale={1.258} />
      <mesh geometry={nodes.campfire_log_2.geometry} material={materials['Material.050']} position={[-2.826, 3.187, 0.882]} rotation={[-2.42, 0.074, -3.062]} scale={1.258} />
      <mesh geometry={nodes.campfire_log_3.geometry} material={materials['Material.049']} position={[-2.753, 3.187, 0.886]} rotation={[-2.297, 0.52, 2.901]} scale={1.258} />
      <mesh geometry={nodes.campfire_log_4.geometry} material={materials['Material.044']} position={[-2.667, 3.187, 1.032]} rotation={[-1.323, 0.839, 1.323]} scale={1.258} />
      <mesh geometry={nodes.campfire_log_5.geometry} material={materials['Material.046']} position={[-2.768, 3.187, 1.204]} rotation={[-0.943, -0.129, 0.033]} scale={1.258} />
      <mesh geometry={nodes.campfire_log_6.geometry} material={materials['Material.047']} position={[-2.928, 3.187, 1.121]} rotation={[0.447, 0.644, -1.097]} scale={1.258} />
      <mesh geometry={nodes.chair_leg_1.geometry} material={materials['Material.032']} position={[-1.402, 3.267, -2.388]} rotation={[0, 0.541, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_leg_2.geometry} material={materials['Material.033']} position={[-1.513, 3.267, -2.321]} rotation={[0, 0.541, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_leg_3.geometry} material={materials['Material.030']} position={[-1.352, 3.267, -2.303]} rotation={[0, 0.541, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_leg_4.geometry} material={materials['Material.031']} position={[-1.463, 3.267, -2.237]} rotation={[0, 0.541, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_seat.geometry} material={materials['Material.029']} position={[-1.429, 3.309, -2.33]} rotation={[0, 0.541, 0]} scale={[0.929, 0.929, 0.696]} />
      <mesh geometry={nodes.chair_support_1.geometry} material={materials['Material.025']} position={[-1.352, 3.446, -2.303]} rotation={[0, 0.541, 0]} scale={[0.929, 1.226, 0.929]} />
      <mesh geometry={nodes.chair_back_bar_2.geometry} material={materials['Material.026']} position={[-1.373, 3.434, -2.291]} rotation={[0, 0.541, -Math.PI / 2]} scale={[0.929, 0.87, 0.929]} />
      <mesh geometry={nodes.chair_back_bar_1.geometry} material={materials['Material.024']} position={[-1.373, 3.487, -2.291]} rotation={[0, 0.541, -Math.PI / 2]} scale={[0.929, 0.87, 0.929]} />
      <mesh geometry={nodes.chair_back_bar_3.geometry} material={materials['Material.028']} position={[-1.373, 3.379, -2.291]} rotation={[0, 0.541, -Math.PI / 2]} scale={[0.929, 0.87, 0.929]} />
      <mesh geometry={nodes.chair_2_leg_1.geometry} material={materials['Material.042']} position={[-1.822, 3.267, -2.331]} rotation={[0, -0.331, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_2_leg_2.geometry} material={materials['Material.041']} position={[-1.944, 3.267, -2.373]} rotation={[0, -0.331, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_2_leg_3.geometry} material={materials['Material.040']} position={[-1.854, 3.267, -2.238]} rotation={[0, -0.331, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_2_leg_4.geometry} material={materials['Material.043']} position={[-1.976, 3.267, -2.28]} rotation={[0, -0.331, 0]} scale={0.929} />
      <mesh geometry={nodes.chair_2_seat.geometry} material={materials['Material.039']} position={[-1.883, 3.309, -2.314]} rotation={[0, -0.331, 0]} scale={[0.929, 0.929, 0.696]} />
      <mesh geometry={nodes.chair_2_support_1.geometry} material={materials['Material.035']} position={[-1.854, 3.446, -2.238]} rotation={[0, -0.331, 0]} scale={[0.929, 1.226, 0.929]} />
      <mesh geometry={nodes.chair_2_support_2.geometry} material={materials['Material.036']} position={[-1.976, 3.446, -2.28]} rotation={[0, -0.331, 0]} scale={[0.929, 1.226, 0.929]} />
      <mesh geometry={nodes.chair_2_back_bar_2.geometry} material={materials['Material.037']} position={[-1.877, 3.434, -2.246]} rotation={[0, -0.331, -Math.PI / 2]} scale={[0.929, 0.87, 0.929]} />
      <mesh geometry={nodes.chair_2_back_bar_1.geometry} material={materials['Material.034']} position={[-1.877, 3.487, -2.246]} rotation={[0, -0.331, -Math.PI / 2]} scale={[0.929, 0.87, 0.929]} />
      <mesh geometry={nodes.chair_2_back_bar_3.geometry} material={materials['Material.038']} position={[-1.877, 3.379, -2.246]} rotation={[0, -0.331, -Math.PI / 2]} scale={[0.929, 0.87, 0.929]} />
      <group position={[1.566, 3.242, -1.215]} rotation={[0, 0.729, 0]} scale={[0.089, 0.059, 0.089]}>
        <mesh geometry={nodes.Cylinder012.geometry} material={materials['Material.075']} />
        <mesh geometry={nodes.Cylinder012_1.geometry} material={materials['Material.088']} />
      </group>
      <group position={[1.479, 3.241, -1.043]} rotation={[0, 0.729, 0]} scale={[0.089, 0.059, 0.089]}>
        <mesh geometry={nodes.Cylinder018.geometry} material={materials['Material.074']} />
        <mesh geometry={nodes.Cylinder018_1.geometry} material={materials['Material.087']} />
      </group>
      <group position={[1.532, 3.362, -1.13]} rotation={[0, 0.729, 0]} scale={[0.089, 0.059, 0.089]}>
        <mesh geometry={nodes.Cylinder019.geometry} material={materials['Material.063']} />
        <mesh geometry={nodes.Cylinder019_1.geometry} material={materials['Material.082']} />
      </group>
      <mesh geometry={nodes.axe_head.geometry} material={materials['Material.015']} position={[0.716, 3.385, -0.969]} rotation={[-0.217, -0.237, 0]} scale={0.042} />
      <mesh geometry={nodes.d1_staircase.geometry} material={materials['Material.022']} position={[-0.228, 2.815, 2.422]} scale={[0.874, 0.695, 1]} />
      <mesh geometry={nodes.d1_staircase_side_support_2.geometry} material={nodes.d1_staircase_side_support_2.material} position={[0.168, 2.999, 1.921]} />
      <mesh geometry={nodes.d2_floor.geometry} material={materials['Material.055']} position={[0.34, 2.783, 2.493]} rotation={[0, Math.PI / 2, 0]} scale={[1, 2.488, 1]} />
      <mesh geometry={nodes.d2_stairs.geometry} material={materials['Material.054']} position={[2.112, 2.106, 2.489]} rotation={[0, Math.PI / 2, 0]} scale={[0.83, 0.695, 1]} />
      <mesh geometry={nodes.d2_fence_3.geometry} material={nodes.d2_fence_3.material} position={[1.25, 2.55, 2.863]} rotation={[1.577, -0.379, -0.002]} scale={[2.359, 0.695, 1.036]} />
      <mesh geometry={nodes.d2_stair_support_2.geometry} material={nodes.d2_stair_support_2.material} position={[0.375, 2.777, 2.126]} />
      <mesh geometry={nodes.d2_stair_support_1.geometry} material={nodes.d2_stair_support_1.material} position={[0.375, 2.777, 2.875]} />
      <mesh geometry={nodes.d3_floor.geometry} material={materials['Material.059']} position={[3.26, 2.075, 2.483]} rotation={[0, Math.PI / 2, 0]} scale={[1, 2.488, 1]} />
      <mesh geometry={nodes.d3_support_1.geometry} material={materials['Material.058']} position={[2.257, 2.016, 2.86]} rotation={[0, 0, -Math.PI / 2]} scale={[0.78, 4.708, 1.296]} />
      <mesh geometry={nodes.d3_support_2.geometry} material={materials['Material.061']} position={[3.218, 2.016, 2.86]} rotation={[0, 0, -Math.PI / 2]} scale={[0.78, 4.708, 1.296]} />
      <mesh geometry={nodes.flagstone_1.geometry} material={nodes.flagstone_1.material} position={[-1.241, 3.182, 0.25]} rotation={[Math.PI, -1.377, Math.PI]} scale={[-0.058, -0.006, -0.058]} />
      <mesh geometry={nodes.flagstone_6.geometry} material={nodes.flagstone_6.material} position={[-0.941, 3.196, 0.396]} rotation={[0, 0.464, 0]} scale={[-0.058, -0.006, -0.058]} />
      <group position={[-0.629, 4.726, -1.275]} scale={[1.625, 1.476, 1.173]}>
        <mesh geometry={nodes.Cube007.geometry} material={materials['house - top window roof']} />
        <mesh geometry={nodes.Cube007_1.geometry} material={materials['house - top window']} />
        <mesh geometry={nodes.Cube007_2.geometry} material={materials['house - top window roof trim']} />
      </group>
      <group position={[-0.441, 4.735, -1.275]} scale={[-0.007, -0.079, -0.047]}>
        <mesh geometry={nodes.Cube011.geometry} material={materials['house - top window window pane']} />
        <mesh geometry={nodes.Cube011_1.geometry} material={materials['house - top window windows']} />
      </group>
      <group position={[-0.549, 3.682, -0.412]} rotation={[0, Math.PI / 2, 0]}>
        <mesh geometry={nodes.Cube004.geometry} material={materials['front-window-glass']} />
        <mesh geometry={nodes.Cube004_1.geometry} material={materials['front-window-pane']} />
      </group>
      <mesh geometry={nodes.door_knob_long_part.geometry} material={materials['house - door knob handle']} position={[-0.99, 3.493, -0.41]} scale={[0.003, 0.003, 0.004]} />
      <mesh geometry={nodes.door_knob.geometry} material={materials['Material.003']} position={[-0.989, 3.493, -0.398]} scale={0.009} />
      <mesh geometry={nodes.chimney.geometry} material={materials['house - chimney']} position={[-1.433, 4.889, -1.698]} />
      <mesh geometry={nodes.stair1001.geometry} material={materials.steps} position={[-0.781, 3.2, -2.394]} rotation={[Math.PI, 0, Math.PI]} scale={[1.844, 1, 1]} />
      <mesh geometry={nodes.Sphere007.geometry} material={materials['Material.007']} position={[-0.767, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.Sphere008.geometry} material={materials['Material.009']} position={[-0.687, 3.212, -0.373]} scale={0.037} />
      <mesh geometry={nodes.Sphere009.geometry} material={materials['Material.011']} position={[-0.612, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.Sphere010.geometry} material={materials['Material.013']} position={[-0.541, 3.212, -0.373]} scale={0.037} />
      <mesh geometry={nodes.Sphere011.geometry} material={materials['Material.008']} position={[-0.463, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.Sphere012.geometry} material={materials['Material.010']} position={[-0.387, 3.212, -0.373]} scale={0.037} />
      <mesh geometry={nodes.Sphere013.geometry} material={materials['Material.012']} position={[-0.309, 3.205, -0.377]} scale={0.025} />
      <mesh geometry={nodes.house_flower_box_left.geometry} material={materials['house - flower box 1']} position={[-1.681, 3.202, -0.366]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.house_flower_box_right.geometry} material={materials['house - flower box 2']} position={[-0.537, 3.202, -0.366]} rotation={[0, Math.PI / 2, 0]} />
      <mesh geometry={nodes.table.geometry} material={materials['picnic-table']} position={[-2.731, 3.411, -0.199]} />
      <mesh geometry={nodes.leg_3.geometry} material={materials['Material.017']} position={[-3.078, 3.34, -0.194]} rotation={[Math.PI / 4, -Math.PI / 2, 0]} scale={[0.549, 1.184, 0.474]} />
      <mesh geometry={nodes.bench_1.geometry} material={materials['Material.045']} position={[-2.731, 3.337, -0.026]} />
    </motion.group>
  )
}

useGLTF.preload('./model/house.glb')
