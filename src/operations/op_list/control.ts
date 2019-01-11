/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

export const json = [
  {
    'tfOpName': 'LoopCond',
    'dlOpName': 'loopCond',
    'category': 'control',
    'params': [{'tfInputIndex': 0, 'dlParamName': 'pred', 'type': 'tensor'}]
  },
  {
    'tfOpName': 'Switch',
    'dlOpName': 'switch',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'data', 'type': 'tensor'},
      {'tfInputIndex': 1, 'dlParamName': 'pred', 'type': 'tensor'}
    ]
  },
  {
    'tfOpName': 'Merge',
    'dlOpName': 'merge',
    'category': 'control',
    'params': [{
      'tfInputIndex': 0,
      'tfInputParamLength': 0,
      'dlParamName': 'tensors',
      'type': 'tensors'
    }]
  },
  {
    'tfOpName': 'Enter',
    'dlOpName': 'enter',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensor', 'type': 'tensor'}, {
        'tfParamName': 'T',
        'dlParamName': 'dtype',
        'type': 'dtype',
        'notSupported': true
      },
      {
        'tfParamName': 'frame_name',
        'dlParamName': 'frameName',
        'type': 'string'
      },
      {
        'tfParamName': 'is_constant',
        'dlParamName': 'isConstant',
        'type': 'bool'
      }
    ]
  },
  {
    'tfOpName': 'Exit',
    'dlOpName': 'exit',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensor', 'type': 'tensor'}, {
        'tfParamName': 'T',
        'dlParamName': 'dtype',
        'type': 'dtype',
        'notSupported': true
      }
    ]
  },
  {
    'tfOpName': 'NextIteration',
    'dlOpName': 'nextIteration',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensor', 'type': 'tensor'}, {
        'tfParamName': 'T',
        'dlParamName': 'dtype',
        'type': 'dtype',
        'notSupported': true
      }
    ]
  },
  {
    'tfOpName': 'TensorArrayV3',
    'dlOpName': 'tensorArray',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'size', 'type': 'number'},
      {'tfParamName': 'dtype', 'dlParamName': 'dtype', 'type': 'dtype'}, {
        'tfParamName': 'element_shape',
        'dlParamName': 'elementShape',
        'type': 'shape'
      },
      {
        'tfParamName': 'dynamic_size',
        'dlParamName': 'dynamicSize',
        'type': 'bool'
      },
      {
        'tfParamName': 'clear_after_read',
        'dlParamName': 'clearAfterRead',
        'type': 'bool'
      },
      {
        'tfParamName': 'identical_element_shapes',
        'dlParamName': 'identicalElementShapes',
        'type': 'bool'
      },
      {
        'tfParamName': 'tensor_array_name',
        'dlParamName': 'name',
        'type': 'string'
      }
    ]
  },
  {
    'tfOpName': 'TensorArrayWriteV3',
    'dlOpName': 'tensorArrayWrite',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'index', 'type': 'number'},
      {'tfInputIndex': 2, 'dlParamName': 'tensor', 'type': 'tensor'},
      {'tfInputIndex': 3, 'dlParamName': 'flowIn', 'type': 'number'}, {
        'tfParamName': 'T',
        'dlParamName': 'dtype',
        'type': 'dtype',
        'notSupported': true
      }
    ]
  },
  {
    'tfOpName': 'TensorArrayReadV3',
    'dlOpName': 'tensorArrayRead',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'index', 'type': 'number'},
      {'tfInputIndex': 2, 'dlParamName': 'flowIn', 'type': 'number'}, {
        'tfParamName': 'dtype',
        'dlParamName': 'dtype',
        'type': 'dtype',
        'notSupported': true
      }
    ]
  },
  {
    'tfOpName': 'TensorArrayGatherV3',
    'dlOpName': 'tensorArrayGather',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'indices', 'type': 'number[]'},
      {'tfInputIndex': 2, 'dlParamName': 'flowIn', 'type': 'number'},
      {'tfParamName': 'dtype', 'dlParamName': 'dtype', 'type': 'dtype'}, {
        'tfParamName': 'element_shape',
        'dlParamName': 'elementShape',
        'type': 'shape'
      }
    ]
  },
  {
    'tfOpName': 'TensorArrayScatterV3',
    'dlOpName': 'tensorArrayScatter',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'indices', 'type': 'number[]'},
      {'tfInputIndex': 2, 'dlParamName': 'tensor', 'type': 'tensor'},
      {'tfInputIndex': 3, 'dlParamName': 'flowIn', 'type': 'number'},
      {'tfParamName': 'T', 'dlParamName': 'dtype', 'type': 'dtype'}
    ]
  },
  {
    'tfOpName': 'TensorArrayConcatV3',
    'dlOpName': 'tensorArrayConcat',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'flowIn', 'type': 'number'},
      {'tfParamName': 'dtype', 'dlParamName': 'dtype', 'type': 'dtype'}, {
        'tfParamName': 'element_shape_except0',
        'dlParamName': 'elementShapeExcept0',
        'type': 'shape',
        'notSupported': true
      }
    ]
  },
  {
    'tfOpName': 'TensorArraySplitV3',
    'dlOpName': 'tensorArraySplit',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'tensor', 'type': 'tensor'},
      {'tfInputIndex': 2, 'dlParamName': 'lengths', 'type': 'number[]'},
      {'tfInputIndex': 3, 'dlParamName': 'flowIn', 'type': 'number'},
      {'tfParamName': 'T', 'dlParamName': 'dtype', 'type': 'dtype'}
    ]
  },
  {
    'tfOpName': 'TensorArraySizeV3',
    'dlOpName': 'tensorArraySize',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'flowIn', 'type': 'number'}
    ]
  },
  {
    'tfOpName': 'TensorArrayCloseV3',
    'dlOpName': 'tensorArrayClose',
    'category': 'control',
    'params':
        [{'tfInputIndex': 0, 'dlParamName': 'tensorArrayId', 'type': 'number'}]
  },
  {
    'tfOpName': 'FIFOQueueV2',
    'dlOpName': 'fifoQueue',
    'category': 'control',
    'params': [
      {
        'tfParamName': 'component_types',
        'dlParamName': 'dtypes',
        'type': 'dtype[]'
      },
      {'tfParamName': 'shapes', 'dlParamName': 'shapes', 'type': 'number[][]'},
      {'tfParamName': 'capacity', 'dlParamName': 'capacity', 'type': 'number'},
      {
        'tfParamName': 'container',
        'dlParamName': 'container',
        'type': 'string'
      },
      {'tfParamName': 'shared_name', 'dlParamName': 'name', 'type': 'string'}
    ]
  },
  {
    'tfOpName': 'QueueDequeueUpToV2',
    'dlOpName': 'queueDequeueUpTo',
    'category': 'control',
    'params': [
      {'tfInputIndex': 0, 'dlParamName': 'fifoQueueId', 'type': 'number'},
      {'tfInputIndex': 1, 'dlParamName': 'num', 'type': 'number'},
      // {
      //   'tfParamName': 'component_types',
      //   'dlParamName': 'dtypes',
      //   'type': 'dtype'
      // }
    ]
  },
];
