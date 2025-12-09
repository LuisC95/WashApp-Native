import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ServiceStatusEnum, getLastWash } from './Service';

/**
 * Componente de tracking visual con 4 círculos conectados por líneas
 * Muestra el progreso del servicio de lavado en tiempo real
 */
export default function WashTrackingVisual() {
    const lastWash = getLastWash();

    // Si no hay servicio, no mostrar nada
    if (!lastWash) {
        return null;
    }

    const currentStatus = lastWash.serviceStatus.currentStatus;

    /**
     * Define los 4 estados del servicio con sus etiquetas
     */
    const statusSteps = [
        { status: ServiceStatusEnum.TUNNEL_WASH, label: 'Túnel', emoji: '💧' },
        { status: ServiceStatusEnum.QUEUED, label: 'En Cola', emoji: '⏳' },
        { status: ServiceStatusEnum.IN_PROGRESS, label: 'En Proceso', emoji: '🔧' },
        { status: ServiceStatusEnum.COMPLETED, label: 'Completado', emoji: '✅' }
    ];

    /**
     * Obtiene el índice del estado actual
     */
    const getCurrentStatusIndex = (): number => {
        return statusSteps.findIndex(step => step.status === currentStatus);
    };

    /**
     * Verifica si un paso está completado o es el actual
     */
    const isStepActive = (index: number): boolean => {
        return index <= getCurrentStatusIndex();
    };

    /**
     * Verifica si la línea conectora está activa
     */
    const isLineActive = (index: number): boolean => {
        return index < getCurrentStatusIndex();
    };

    const currentIndex = getCurrentStatusIndex();

    return (
        <View style={styles.container}>
            {/* Título del tracking */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Estado del Servicio</Text>
                <Text style={styles.serviceNumber}>#{lastWash.serviceNumber}</Text>
            </View>

            {/* Tracking visual */}
            <View style={styles.trackingContainer}>
                {statusSteps.map((step, index) => (
                    <React.Fragment key={index}>
                        {/* Círculo del estado */}
                        <View style={styles.stepWrapper}>
                            <View
                                style={[
                                    styles.circle,
                                    isStepActive(index) && styles.circleActive,
                                    index === currentIndex && styles.circleCurrent
                                ]}
                            >
                                {isStepActive(index) ? (
                                    <Text style={styles.emoji}>{step.emoji}</Text>
                                ) : (
                                    <View style={styles.circleEmpty} />
                                )}
                            </View>
                            <Text style={[
                                styles.label,
                                isStepActive(index) && styles.labelActive
                            ]}>
                                {step.label}
                            </Text>
                        </View>

                        {/* Línea conectora (no mostrar después del último círculo) */}
                        {index < statusSteps.length - 1 && (
                            <View style={styles.lineWrapper}>
                                <View
                                    style={[
                                        styles.line,
                                        isLineActive(index) && styles.lineActive
                                    ]}
                                />
                            </View>
                        )}
                    </React.Fragment>
                ))}
            </View>

            {/* Información adicional del servicio */}
            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Tipo:</Text>
                    <Text style={styles.infoValue}>{lastWash.serviceType}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Empleado:</Text>
                    <Text style={styles.infoValue}>{lastWash.serviceEmployee}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Text style={styles.infoLabel}>Tiempo estimado:</Text>
                    <Text style={styles.infoValue}>{lastWash.serviceTimming} min</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'transparent',
        borderRadius: 12,
        padding: 12,
        paddingHorizontal: 8,
        flex: 1,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        paddingBottom: 8,
        borderBottomWidth: 2,
        borderBottomColor: '#000E1F',
    },

    headerTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000E1F',
    },

    serviceNumber: {
        fontSize: 15,
        fontWeight: '700',
        color: '#000E1F',
    },

    trackingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingHorizontal: 2,
    },

    stepWrapper: {
        alignItems: 'center',
        flex: 0,
    },

    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 3,
        borderColor: '#d0d0d0',
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 6,
    },

    circleActive: {
        borderColor: '#000E1F',
        backgroundColor: '#fff',
    },

    circleCurrent: {
        borderColor: '#fff',
        backgroundColor: '#000E1F',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },

    circleEmpty: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#d0d0d0',
    },

    emoji: {
        fontSize: 18,
    },

    label: {
        fontSize: 10,
        color: '#666',
        textAlign: 'center',
        fontWeight: '500',
        maxWidth: 55,
    },

    labelActive: {
        color: '#000E1F',
        fontWeight: '700',
    },

    lineWrapper: {
        flex: 1,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 1,
    },

    line: {
        height: 3,
        width: '100%',
        backgroundColor: '#a0a0a0',
        borderRadius: 2,
    },

    lineActive: {
        backgroundColor: '#000E1F',
    },

    infoContainer: {
        backgroundColor: 'rgba(0, 14, 31, 0.1)',
        borderRadius: 8,
        padding: 10,
        gap: 6,
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    infoLabel: {
        fontSize: 11,
        color: '#000E1F',
        fontWeight: '500',
    },

    infoValue: {
        fontSize: 11,
        color: '#000E1F',
        fontWeight: '700',
    },
});
