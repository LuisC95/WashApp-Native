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
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000E1F',
    },

    serviceNumber: {
        fontSize: 16,
        fontWeight: '600',
        color: '#52CC52',
    },

    trackingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        paddingHorizontal: 4,
    },

    stepWrapper: {
        alignItems: 'center',
        flex: 0,
    },

    circle: {
        width: 44,
        height: 44,
        borderRadius: 22,
        borderWidth: 3,
        borderColor: '#d0d0d0',
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },

    circleActive: {
        borderColor: '#000E1F',
        backgroundColor: '#fff',
    },

    circleCurrent: {
        borderColor: '#52CC52',
        backgroundColor: '#e8f8f0',
        shadowColor: '#52CC52',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.4,
        shadowRadius: 8,
        elevation: 6,
    },

    circleEmpty: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: '#d0d0d0',
    },

    emoji: {
        fontSize: 20,
    },

    label: {
        fontSize: 11,
        color: '#888',
        textAlign: 'center',
        fontWeight: '500',
        maxWidth: 60,
    },

    labelActive: {
        color: '#000E1F',
        fontWeight: '600',
    },

    lineWrapper: {
        flex: 1,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 2,
    },

    line: {
        height: 3,
        width: '100%',
        backgroundColor: '#d0d0d0',
        borderRadius: 2,
    },

    lineActive: {
        backgroundColor: '#000E1F',
    },

    infoContainer: {
        backgroundColor: '#f8f9fa',
        borderRadius: 8,
        padding: 12,
        gap: 8,
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    infoLabel: {
        fontSize: 13,
        color: '#666',
        fontWeight: '500',
    },

    infoValue: {
        fontSize: 13,
        color: '#000E1F',
        fontWeight: '600',
    },
});
