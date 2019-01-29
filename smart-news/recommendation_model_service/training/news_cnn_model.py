import tensorflow as tf

EMBEDDING_SIZE = 40
N_FILTERS = 10
WINDOW_SIZE = 20
FILTER_SHAPE1 = [WINDOW_SIZE, EMBEDDING_SIZE]
FILTER_SHAPE2 = [WINDOW_SIZE, N_FILTERS]
POOLING_WINDOW = 4
POOLING_STRIDE = 2
FC_1 = 64



LEARNING_RATE = 0.05

def get_cnn_model(n_classes, n_words):
    def cnn_model(features,target):
        target = tf.one_hot(target, n_classes, 1, 0)
        word_vectors = tf.contrib.layers.embed_sequence(
            features, vocab_size = n_words, embed_dim=EMBEDDING_SIZE, scope='words')
        word_vectors = tf.expand_dims(word_vectors, 3)
        # First Convolution Layer
        with tf.variable_scope('CNN_layer1'):
            # Apply Convolution filtering on input sequence.
            conv1 = tf.contrib.layers.convolution2d(
                word_vectors, N_FILTERS, FILTER_SHAPE1, padding='VALID')
            # Relu function
            conv1 = tf.nn.relu(conv1)
            # Max Pooling to reduce dimentionality
            pool1 = tf.nn.max_pool(
                conv1,
                ksize=[1, POOLING_WINDOW, 1, 1],
                strides=[1, POOLING_STRIDE, 1, 1],
                padding='SAME')
            pool1 = tf.transpose(pool1, [0, 1, 3, 2])

        with tf.variable_scope('CNN_layer2'):

            conv2 = tf.contrib.layers.convolution2d(
                pool1, N_FILTERS, FILTER_SHAPE2, padding='VALID')
            # Max across each filter to get useful features for classification.
            pool2 = tf.squeeze(tf.reduce_max(conv2, 1), squeeze_dims=[1])

            #Fully connected layer to produce the actual prediction
        fc1 = tf.contrib.layers.fully_connected(pool2, FC_1, activation_fn=None)
        fc2 = tf.contrib.layers.fully_connected(fc1, n_classes)
        loss = tf.contrib.losses.softmax_cross_entropy(fc2, target)

        train_op = tf.contrib.layers.optimize_loss(
            loss,
            tf.contrib.framework.get_global_step(),
            optimizer='Adam',
            learning_rate=LEARNING_RATE)

        return ({
                    'class': tf.argmax(fc2, 1),
                    'prob': tf.nn.softmax(fc2)
                }, loss, train_op)

    return cnn_model
