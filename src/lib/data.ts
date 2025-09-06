// Mock data for Botify.store - realistic robotics and AI components

import { Product, Category } from './types';

export const categories: Category[] = [
  {
    id: 'sensors',
    name: 'Sensors',
    description: 'Advanced sensing technology for robotics',
    image: 'https://placehold.co/400x300?text=Advanced+robotic+sensors+and+detection+modules+with+metallic+finish',
    productCount: 24,
    subcategories: ['LIDAR', 'Cameras', 'IMU', 'Ultrasonic', 'Temperature', 'Proximity']
  },
  {
    id: 'actuators',
    name: 'Actuators',
    description: 'Motors and movement systems',
    image: 'https://placehold.co/400x300?text=Precision+servo+motors+and+robotic+actuators+on+white+background',
    productCount: 18,
    subcategories: ['Servo Motors', 'Stepper Motors', 'Linear Actuators', 'Pneumatics']
  },
  {
    id: 'controllers',
    name: 'Controllers',
    description: 'Processing units and control boards',
    image: 'https://placehold.co/400x300?text=Modern+microcontroller+boards+and+processing+units+for+robotics',
    productCount: 15,
    subcategories: ['Arduino', 'Raspberry Pi', 'Custom Controllers', 'Neural Processors']
  },
  {
    id: 'ai-modules',
    name: 'AI Modules',
    description: 'Machine learning and AI processing',
    image: 'https://placehold.co/400x300?text=AI+processing+modules+and+neural+network+chips+high+tech+design',
    productCount: 12,
    subcategories: ['Computer Vision', 'Speech Recognition', 'ML Accelerators', 'Edge AI']
  },
  {
    id: 'power',
    name: 'Power Systems',
    description: 'Batteries and power management',
    image: 'https://placehold.co/400x300?text=Advanced+robotic+power+systems+and+battery+modules+professional',
    productCount: 20,
    subcategories: ['Li-Po Batteries', 'Power Distribution', 'Solar Panels', 'Charging Systems']
  },
  {
    id: 'communication',
    name: 'Communication',
    description: 'Wireless and wired connectivity',
    image: 'https://placehold.co/400x300?text=Wireless+communication+modules+and+antenna+systems+for+robots',
    productCount: 16,
    subcategories: ['WiFi', 'Bluetooth', 'RF Modules', '5G/LTE', 'Mesh Networks']
  }
];

export const products: Product[] = [
  // Sensors
  {
    id: 'lidar-360-v2',
    name: 'LiDAR 360° Scanner V2',
    category: 'sensors',
    subcategory: 'LIDAR',
    price: 899.99,
    originalPrice: 1099.99,
    image: 'https://placehold.co/600x600?text=Professional+360+degree+LiDAR+scanner+with+rotating+mechanism+black+finish',
    description: 'High-precision 360° LiDAR scanner with 40m range and real-time point cloud generation. Perfect for autonomous navigation, mapping, and obstacle detection in robotic applications.',
    shortDescription: 'Professional 360° LiDAR with 40m range for autonomous navigation',
    specifications: {
      'Range': '40 meters',
      'Accuracy': '±2cm',
      'Scan Rate': '10 Hz',
      'Points/Second': '320,000',
      'Interface': 'USB 3.0, Ethernet',
      'Power': '12V DC, 8W',
      'Weight': '850g'
    },
    features: [
      'Real-time point cloud generation',
      'ROS/ROS2 compatible',
      'Weather-resistant IP65 rating',
      'SDK and API included',
      'Multi-platform support'
    ],
    inStock: true,
    stockCount: 15,
    rating: 4.8,
    reviews: 47,
    isNew: true,
    isFeatured: true,
    tags: ['lidar', 'navigation', 'mapping', 'autonomous'],
    brand: 'RoboSense',
    sku: 'RS-LIDAR-360-V2'
  },
  {
    id: 'stereo-vision-cam',
    name: 'Stereo Vision Camera Module',
    category: 'sensors',
    subcategory: 'Cameras',
    price: 299.99,
    image: 'https://placehold.co/600x600?text=Dual+stereo+vision+camera+module+with+precision+optics+and+mounting+bracket',
    description: 'Advanced stereo vision camera system with depth perception capabilities. Ideal for computer vision, object recognition, and 3D mapping applications.',
    shortDescription: 'Stereo vision system with depth perception for CV applications',
    specifications: {
      'Resolution': '2MP per camera',
      'Frame Rate': '60 FPS',
      'Baseline': '120mm',
      'Depth Range': '0.2-20m',
      'Interface': 'USB 3.0',
      'Power': '5V, 2A',
      'Dimensions': '180x60x40mm'
    },
    features: [
      'Real-time depth mapping',
      'OpenCV integration',
      'Wide-angle lenses',
      'Hardware-accelerated processing',
      'Cross-platform SDK'
    ],
    inStock: true,
    stockCount: 28,
    rating: 4.6,
    reviews: 32,
    isFeatured: true,
    tags: ['camera', 'vision', 'depth', 'opencv'],
    brand: 'VisionTech',
    sku: 'VT-STEREO-CAM-01'
  },
  {
    id: 'imu-9dof-pro',
    name: '9-DOF IMU Pro Sensor',
    category: 'sensors',
    subcategory: 'IMU',
    price: 149.99,
    image: 'https://placehold.co/600x600?text=9DOF+IMU+sensor+module+on+PCB+with+connector+pins+professional+grade',
    description: 'Professional-grade 9-DOF Inertial Measurement Unit with accelerometer, gyroscope, and magnetometer. Essential for robot orientation and motion tracking.',
    shortDescription: '9-DOF IMU with accelerometer, gyroscope, and magnetometer',
    specifications: {
      'Accelerometer': '±16g',
      'Gyroscope': '±2000 dps',
      'Magnetometer': '±4900 μT',
      'Update Rate': '1000 Hz',
      'Interface': 'I2C, SPI',
      'Power': '3.3V-5V',
      'Dimensions': '25x20x3mm'
    },
    features: [
      'High precision sensors',
      'Digital motion processing',
      'Calibration algorithms',
      'Arduino/RPi libraries',
      'Low power consumption'
    ],
    inStock: true,
    stockCount: 45,
    rating: 4.7,
    reviews: 89,
    tags: ['imu', 'orientation', 'motion', 'tracking'],
    brand: 'MotionSense',
    sku: 'MS-IMU-9DOF-PRO'
  },
  
  // Actuators
  {
    id: 'servo-high-torque',
    name: 'High-Torque Digital Servo',
    category: 'actuators',
    subcategory: 'Servo Motors',
    price: 189.99,
    image: 'https://placehold.co/600x600?text=Heavy+duty+digital+servo+motor+with+metal+gears+and+mounting+bracket',
    description: 'Industrial-grade digital servo motor with high torque output and precision control. Perfect for robotic arms, grippers, and heavy-duty applications.',
    shortDescription: 'Industrial digital servo with high torque for heavy-duty robotics',
    specifications: {
      'Torque': '35 kg-cm',
      'Speed': '0.15 sec/60°',
      'Control': 'Digital PWM',
      'Voltage': '6V-7.4V',
      'Current': '2.5A stall',
      'Weight': '68g',
      'Rotation': '270°'
    },
    features: [
      'Metal gear construction',
      'Position feedback',
      'Overload protection',
      'Temperature monitoring',
      'CNC aluminum case'
    ],
    inStock: true,
    stockCount: 22,
    rating: 4.9,
    reviews: 156,
    isFeatured: true,
    tags: ['servo', 'motor', 'torque', 'robotics'],
    brand: 'ServoMax',
    sku: 'SM-SERVO-HT-35'
  },
  {
    id: 'stepper-nema23',
    name: 'NEMA 23 Stepper Motor',
    category: 'actuators',
    subcategory: 'Stepper Motors',
    price: 79.99,
    image: 'https://placehold.co/600x600?text=NEMA+23+stepper+motor+with+shaft+and+mounting+holes+industrial+design',
    description: 'Precision NEMA 23 stepper motor for accurate positioning in CNC, 3D printers, and robotic systems. High holding torque with smooth operation.',
    shortDescription: 'Precision NEMA 23 stepper motor for accurate positioning',
    specifications: {
      'Steps/Revolution': '200',
      'Holding Torque': '1.9 Nm',
      'Current': '3.0A',
      'Voltage': '3.6V',
      'Shaft': '6.35mm',
      'Length': '76mm',
      'Weight': '1.2kg'
    },
    features: [
      'High precision stepping',
      'Low vibration',
      'Dual shaft option',
      'Multiple winding configurations',
      'Industrial grade bearings'
    ],
    inStock: true,
    stockCount: 35,
    rating: 4.5,
    reviews: 78,
    tags: ['stepper', 'nema23', 'precision', 'cnc'],
    brand: 'StepTech',
    sku: 'ST-NEMA23-190'
  },
  
  // Controllers
  {
    id: 'arduino-mega-pro',
    name: 'Arduino Mega 2560 Pro',
    category: 'controllers',
    subcategory: 'Arduino',
    price: 45.99,
    image: 'https://placehold.co/600x600?text=Arduino+Mega+2560+microcontroller+board+with+pins+and+USB+connector',
    description: 'Enhanced Arduino Mega 2560 with additional features for robotics projects. 54 digital I/O pins, 16 analog inputs, and multiple serial ports.',
    shortDescription: 'Enhanced Arduino Mega with 54 I/O pins for complex robotics',
    specifications: {
      'Microcontroller': 'ATmega2560',
      'Digital I/O': '54 pins',
      'Analog Input': '16 pins',
      'Flash Memory': '256 KB',
      'SRAM': '8 KB',
      'Clock Speed': '16 MHz',
      'USB': 'Type-B connector'
    },
    features: [
      'Multiple serial interfaces',
      'PWM outputs',
      'External interrupt pins',
      'Built-in LED indicator',
      'Compatible with shields'
    ],
    inStock: true,
    stockCount: 67,
    rating: 4.8,
    reviews: 234,
    isFeatured: true,
    tags: ['arduino', 'microcontroller', 'prototyping', 'robotics'],
    brand: 'Arduino',
    sku: 'ARD-MEGA-PRO-2560'
  },
  {
    id: 'raspberry-pi-5',
    name: 'Raspberry Pi 5 - 8GB RAM',
    category: 'controllers',
    subcategory: 'Raspberry Pi',
    price: 89.99,
    image: 'https://placehold.co/600x600?text=Raspberry+Pi+5+single+board+computer+with+ports+and+GPIO+pins',
    description: 'Latest Raspberry Pi 5 with 8GB RAM, perfect for AI robotics, computer vision, and edge computing applications. Significant performance improvements over Pi 4.',
    shortDescription: 'Latest Raspberry Pi 5 with 8GB RAM for AI and robotics',
    specifications: {
      'CPU': 'Quad-core ARM Cortex-A76',
      'RAM': '8GB LPDDR4X',
      'GPU': 'VideoCore VII',
      'Storage': 'MicroSD, USB 3.0',
      'Connectivity': 'WiFi 6, Bluetooth 5.0',
      'GPIO': '40 pins',
      'Video': '4K@60fps dual display'
    },
    features: [
      '3x faster than Pi 4',
      'Hardware video encoding',
      'PCIe 2.0 interface',
      'Power-over-Ethernet ready',
      'Camera and display connectors'
    ],
    inStock: true,
    stockCount: 18,
    rating: 4.9,
    reviews: 91,
    isNew: true,
    isFeatured: true,
    tags: ['raspberry-pi', 'computer', 'ai', 'vision'],
    brand: 'Raspberry Pi Foundation',
    sku: 'RPI-5-8GB'
  },
  
  // AI Modules
  {
    id: 'coral-ai-tpu',
    name: 'Coral AI Edge TPU Dev Board',
    category: 'ai-modules',
    subcategory: 'ML Accelerators',
    price: 179.99,
    originalPrice: 199.99,
    image: 'https://placehold.co/600x600?text=Google+Coral+AI+Edge+TPU+development+board+with+connectors+and+heatsink',
    description: 'Google Coral AI development board with Edge TPU for machine learning inference at the edge. Perfect for computer vision and AI robotics applications.',
    shortDescription: 'Google Coral AI board with Edge TPU for ML inference',
    specifications: {
      'CPU': 'NXP i.MX 8M SOC',
      'ML Accelerator': 'Google Edge TPU',
      'RAM': '1GB LPDDR4',
      'Storage': '8GB eMMC',
      'Connectivity': 'WiFi, Bluetooth, Ethernet',
      'I/O': '40-pin GPIO',
      'Camera': 'MIPI-CSI connector'
    },
    features: [
      'TensorFlow Lite acceleration',
      'Real-time ML inference',
      'Pre-trained models included',
      'Python and C++ APIs',
      'Low power consumption'
    ],
    inStock: true,
    stockCount: 12,
    rating: 4.7,
    reviews: 43,
    isFeatured: true,
    tags: ['ai', 'tpu', 'tensorflow', 'edge-computing'],
    brand: 'Google',
    sku: 'CORAL-DEV-BOARD-TPU'
  },
  {
    id: 'intel-ncs2',
    name: 'Intel Neural Compute Stick 2',
    category: 'ai-modules',
    subcategory: 'Neural Processors',
    price: 99.99,
    image: 'https://placehold.co/600x600?text=Intel+Neural+Compute+Stick+2+USB+device+for+AI+processing+blue+design',
    description: 'Intel Neural Compute Stick 2 for deep learning inference on edge devices. USB-powered neural processing unit for AI applications.',
    shortDescription: 'USB-powered neural processing unit for edge AI inference',
    specifications: {
      'VPU': 'Intel Movidius Myriad X',
      'Performance': '1 TOPS',
      'Interface': 'USB 3.0',
      'Power': '1W typical',
      'Frameworks': 'OpenVINO, TensorFlow',
      'OS Support': 'Linux, Windows',
      'Dimensions': '72.5mm x 27mm'
    },
    features: [
      'Plug-and-play AI acceleration',
      'OpenVINO toolkit support',
      'Pre-trained model zoo',
      'Python API',
      'Low power consumption'
    ],
    inStock: true,
    stockCount: 31,
    rating: 4.4,
    reviews: 67,
    tags: ['intel', 'neural', 'usb', 'ai-acceleration'],
    brand: 'Intel',
    sku: 'INTEL-NCS2'
  }
];

// Helper functions
export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};